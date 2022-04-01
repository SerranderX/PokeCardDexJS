import { useEffect, useReducer} from 'react';
import { pokemonTypeUtils } from '../shared/Utils';
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

const usePokemonData = () => {
    const [state, dispatch] = useReducer(reducer, initialState({ initialState }));
    const { selectedId, characterSelect, pokemon, logoType, pokemonBackground, selectedTab, pokemonData, onSound, onLoadDescription, tabDescriptionData, shinnyOn, famaleOn, infoShared } = state;

    //Action Creators
    const setPokemonData = (data) => dispatch({ type: actionTypes.SET_POKEMON_DATA, payload: data });
    const setCharacterSelect = (data) => dispatch({ type: actionTypes.SET_CHARACTER_SELECT, payload: data });
    const changeSelectedTab = (data) => dispatch({ type: actionTypes.SET_SELECTED_TAB, payload: data });
    const setOnSound = (data) => dispatch({ type: actionTypes.SET_ON_SOUND, payload: data });
    const setTabDescriptionData = (data) => dispatch({ type: actionTypes.SET_TAB_DESCRIPTION_DATA, payload: data });
    const changeLoading = (data) => dispatch({ type: actionTypes.CHANGE_LOADING, payload: data });
    const setShinnyOn = (data) => dispatch({ type: actionTypes.SET_SHINNY_ON, payload: data });
    const setFamaleOn = (data) => dispatch({ type: actionTypes.SET_FAMALE_ON, payload: data });

    useEffect(() => {
        const getPokemon = async (name) => {
            const response = await axios.get(`${API_URL}pokemon/${name}`);
            const pokemon = pokemonTypeUtils[response.data.types[0].type.name];
            const pokemonTypesIcons = response.data.types.map(type => pokemonTypeUtils[type.type.name]);

            const pkData = [
                { 'key': 'general', 'general': {
                    'height': response.data.height,
                    'weight': response.data.weight,
                    'types': pokemonTypesIcons
                }, 'description': 'Here you can see the general pokemon information.' },
                { 'key': 'stats', 'stats': response.data.stats, 'description': 'Here you can see check the pokemon stats.' },
                { 'key': 'abilities', 'abilities': {}, 'description': 'Here you can see check the pokemon abilities.' },
                { 'key': 'moves', 'moves': {}, 'description': 'Here you can see check the pokemon moves in any pokemon game version.'},
                { 'key': 'locations', 'types': {}, 'description': 'Here you can see check the pokemon location apears, in any pokemon game version.' },
            ];

            const hasFamaleData = (response.data.sprites.front_female === null) ? false : true;
            
            setPokemonData({
                characterSelect: characterSelect,
                selectedTab: pkData[0],
                pokemonData: pkData,
                pokemonBackground: pokemon.color,
                logoType: pokemon.logo,
                pokemon: response.data,
                selectedId: characterSelect,
                tabDescriptionData: null,
                infoShared: {
                    hasFamaleData: hasFamaleData
                }
            });
            
            

            playPokemonSound(0.1, response.data.name);
            
            document.body.style.overflow = "hidden";
        }

        const getPokemonGeneralData = async (id) => {
            if(tabDescriptionData === null){
                const evolutionTriggers = await axios.get(`${API_URL}evolution-trigger/${id}`).then(response => response.data).catch(() => null );
                const encounterMethod = await axios.get(`${API_URL}encounter-method/${id}`).then(response => response.data).catch(() => null);
                const species = await axios.get(`${API_URL}pokemon-species/${id}`).then(response => response.data).catch(() => null);
                const location = await axios.get(pokemon.location_area_encounters).then(response => response.data).catch(() => null);
                if(species != null){
                    const evolutions = await axios.get(species.evolution_chain.url).then(response => response.data).catch(() => null);
                    setTabDescriptionData({evolutions, evolutionTriggers, encounterMethod, location, species});
                } else {
                    setTabDescriptionData({evolutionTriggers, encounterMethod, location, species});
                }
            } else {
                const evolutionTriggers = tabDescriptionData.evolutionTriggers;
                const encounterMethod = tabDescriptionData.encounterMethod;
                const species = tabDescriptionData.species;
                const location = tabDescriptionData.location;
                const evolutions = tabDescriptionData.evolutions;
                const abilitiesMem = tabDescriptionData?.abilities ?? null;

                switch(selectedTab.key) {
                    case 'stats':
                        changeLoading(false);
                        break;
                    case 'abilities':
                        if(abilitiesMem === null){
                            const abilities = await Promise.all(pokemon.abilities.map(async item => {
                                const ability = await axios.get(item.ability.url).then(response => response.data).catch(() => null );
                                if(ability !== null){
                                    return {name: ability.name, data: ability};
                                }
                            }));

                            setTabDescriptionData({evolutions, evolutionTriggers, encounterMethod, location, species, abilities});
                        } else {
                            changeLoading(false);
                        }   
                        break;
                    case 'locations':
                        setTabDescriptionData({evolutions, evolutionTriggers, encounterMethod, location, species, abilities: abilitiesMem});
                        break;
                    default:
                        changeLoading(false);
                        break;
                }
            }
        }
        
        if (characterSelect != null && selectedTab == null && pokemon == null) {
            getPokemon(characterSelect.name);
        } else if (onLoadDescription && pokemon != null){
            getPokemonGeneralData(pokemon.id, pokemon.name);
        }
    }, [characterSelect, onLoadDescription, selectedTab, shinnyOn, famaleOn]);

    const openPokemonCard = (item) => {
        if (selectedId === null) {
            setCharacterSelect(item);
        } else {
            closePokemonCard();
        }
    }
    
    const closePokemonCard = () => {
        document.body.style.overflow = "";
        setPokemonData({
            selectedId: null,
            characterSelect: null,
            pokemon: null,
            logoType: null,
            pokemonBackground: null,
            selectedTab: null,
            onSound: false,
            pokemonData: [],
            onLoadDescription: false,
            tabDescriptionData: null,
            shinnyOn: false,
            famaleOn: false,
            infoShared: {
                hasFamaleData: false
            }
        });
    }

    const playPokemonSound = (volume, name) => {
        const audio = new Audio(`https://play.pokemonshowdown.com/audio/cries/${name}.mp3`);
        audio.volume = volume;
        audio.play().then(() => {
            setOnSound(true);
            setTimeout(() => {
                setOnSound(false);
            } , 1000);
        }).catch(() => {
            if(volume !== 0.1){
                //TODO Toast message for sound not found
                console.log("Audio not played");
            }
        });
    }

    return {
        openPokemonCard,
        closePokemonCard,
        selectedId,
        pokemon,
        logoType,
        pokemonBackground,
        selectedTab,
        changeSelectedTab,
        pokemonData,
        setPokemonData,
        playPokemonSound,
        onSound,
        onLoadDescription,
        tabDescriptionData,
        setShinnyOn,
        shinnyOn,
        setFamaleOn,
        famaleOn,
        infoShared
    };
}

const initialState = () => ({
    selectedId: null,
    characterSelect: null,
    pokemon: null,
    logoType: null,
    pokemonBackground: null,
    selectedTab: null,
    onSound: false,
    pokemonData: [],
    onLoadDescription: false,
    tabDescriptionData: null,
    shinnyOn: false,
    famaleOn: false,
    infoShared: {
        hasFamaleData: false
    }
});

const reducerObject = (state, payload) => ({
    [actionTypes.SET_POKEMON_DATA]: { ...state, 
        characterSelect: payload.characterSelect, 
        selectedTab: payload.selectedTab, 
        pokemonData: payload.pokemonData, 
        pokemonBackground: payload.pokemonBackground, 
        logoType: payload.logoType, 
        pokemon: payload.pokemon, 
        selectedId: payload.selectedId,
        tabDescriptionData: payload.tabDescriptionData,
        infoShared: payload.infoShared,
        shinnyOn: payload.shinnyOn,
        famaleOn: payload.famaleOn
    },
    [actionTypes.SET_CHARACTER_SELECT]: { ...state, characterSelect: payload, onLoadDescription: true },
    [actionTypes.SET_SELECTED_TAB]: { ...state, selectedTab: payload, onLoadDescription: true },
    [actionTypes.SET_ON_SOUND]: { ...state, onSound: payload },
    [actionTypes.SET_TAB_DESCRIPTION_DATA]: { ...state, tabDescriptionData: payload, onLoadDescription: false},
    [actionTypes.CHANGE_LOADING]: { ...state, onLoadDescription: payload },
    [actionTypes.SET_SHINNY_ON]: { ...state, shinnyOn: payload },
    [actionTypes.SET_FAMALE_ON]: { ...state, famaleOn: payload }
});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)?.[action.type] ?? state;
};

const actionTypes = {
    SET_POKEMON_DATA: 'SET_POKEMON_DATA',
    SET_CHARACTER_SELECT: 'SET_CHARACTER_SELECT',
    SET_SELECTED_TAB: 'SET_SELECTED_TAB',
    SET_ON_SOUND: 'SET_ON_SOUND',
    SET_ON_LOAD_DESCRIPTION: 'SET_ON_LOAD_DESCRIPTION',
    SET_TAB_DESCRIPTION_DATA: 'SET_TAB_DESCRIPTION_DATA',
    CHANGE_LOADING: 'CHANGE_LOADING',
    SET_SHINNY_ON: 'SET_SHINNY_ON',
    SET_FAMALE_ON: 'SET_FAMALE_ON'
}

export { usePokemonData };