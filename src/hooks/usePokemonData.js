import { useEffect, useReducer} from 'react';
import BugLogo from '../assets/icons/Types/Bug_Type_Icon.svg';
import DarkLogo from '../assets/icons/Types/Dark_Type_Icon.svg';
import DragonLogo from '../assets/icons/Types/Dragon_Type_Icon.svg';
import FairyLogo from '../assets/icons/Types/Fairy_Type_Icon.svg';
import FightingLogo from '../assets/icons/Types/Fighting_Type_Icon.svg';
import FireLogo from '../assets/icons/Types/Fire_Type_Icon.svg';
import FlyingLogo from '../assets/icons/Types/Flying_Type_Icon.svg';
import GhostLogo from '../assets/icons/Types/Ghost_Type_Icon.svg';
import GrassLogo from '../assets/icons/Types/Grass_Type_Icon.svg';
import GroundLogo from '../assets/icons/Types/Ground_Type_Icon.svg';
import ElectricLogo from '../assets/icons/Types/Electric_Type_Icon.svg';
import IceLogo from '../assets/icons/Types/Ice_Type_Icon.svg';
import PoisonLogo from '../assets/icons/Types/Poison_Type_Icon.svg';
import PsychicLogo from '../assets/icons/Types/Psychic_Type_Icon.svg';
import NormalLogo from '../assets/icons/Types/Normal_Type_Icon.svg';
import WaterLogo from '../assets/icons/Types/Water_Type_Icon.svg';
import RockLogo from '../assets/icons/Types/Rock_Type_Icon.svg';
import SteelLogo from '../assets/icons/Types/Steel_Type_Icon.svg';
import WaterTypeIcon from '../assets/icons/TypesDescription/Agua_Pokemon';
import NormalTypeIcon from '../assets/icons/TypesDescription/Normal_Pokemon';
import SteelTypeIcon from '../assets/icons/TypesDescription/Acero_Pokemon';
import RockTypeIcon from '../assets/icons/TypesDescription/Roca_Pokemon';
import PsychicTypeIcon from '../assets/icons/TypesDescription/Psiquico_Pokemon';
import IceTypeIcon from '../assets/icons/TypesDescription/Hielo_Pokemon';
import ElectricTypeIcon from '../assets/icons/TypesDescription/Electrico_Pokemon';
import GroundTypeIcon from '../assets/icons/TypesDescription/Tierra_Pokemon';
import GrassTypeIcon from '../assets/icons/TypesDescription/Planta_Pokemon';
import DragonTypeIcon from '../assets/icons/TypesDescription/Dragon_Pokemon';
import GhostTypeIcon from '../assets/icons/TypesDescription/Fantasma_Pokemon';
import FlayingTypeIcon from '../assets/icons/TypesDescription/Volador_Pokemon';
import FireTypeIcon from '../assets/icons/TypesDescription/Fuego_Pokemon';
import FightingTypeIcon from '../assets/icons/TypesDescription/Lucha_Pokemon';
import BugTypeIcon from '../assets/icons/TypesDescription/Bicho_Pokemon';
import FairyTypeIcon from '../assets/icons/TypesDescription/Hada_Pokemon';
import DarkTypeIcon from '../assets/icons/TypesDescription/Siniestro_Pokemon';
import PoisonTypeIcon from '../assets/icons/TypesDescription/Veneno_Pokemon';
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/';

const pokemonTypeIcons = {
    'normal': { 'logo': NormalLogo, 'color': { name: 'Normal', primary: 'rgba(145, 154, 162, 1)', secondary: 'rgba(145, 154, 162, 0.2)' }, 'typeIcon': NormalTypeIcon },
    'fighting': { 'logo': FightingLogo, 'color': { name: 'Fighting', primary: 'rgba(224, 48, 106, 1)', secondary: 'rgba(224, 48, 106, 0.2)' }, 'typeIcon': FightingTypeIcon },
    'flying': { 'logo': FlyingLogo, 'color': { name: 'Flying', primary: 'rgba(137 170 227, 1)', secondary: 'rgba(137 170 227, 0.2)' }, 'typeIcon': FlayingTypeIcon },
    'poison': { 'logo': PoisonLogo, 'color': { name: 'Poison', primary: 'rgba(181, 103, 206, 1)', secondary: 'rgba(181, 103, 206, 0.2)' }, 'typeIcon': PoisonTypeIcon },
    'ground': { 'logo': GroundLogo, 'color': { name: 'Ground', primary: 'rgba(232, 114, 54, 1)', secondary: 'rgba(232, 114, 54, 0.2)' }, 'typeIcon': GroundTypeIcon },
    'rock': { 'logo': RockLogo, 'color': { name: 'Rock', primary: 'rgba(200, 182, 134, 1)', secondary: 'rgba(200, 182, 134, 0.2)' }, 'typeIcon': RockTypeIcon },
    'bug': { 'logo': BugLogo, 'color': { name: 'Bug', primary: 'rgba(131, 195, 0, 1)', secondary: 'rgba(131, 195, 0, 0.2)' }, 'typeIcon': BugTypeIcon },
    'ghost': { 'logo': GhostLogo, 'color': { name: 'Ghost', primary: 'rgba(76, 106, 178, 1)', secondary: 'rgba(76, 106, 178, 0.2)' }, 'typeIcon': GhostTypeIcon },
    'steel': { 'logo': SteelLogo, 'color': { name: 'Steel', primary: 'rgba(90, 142, 162, 1)', secondary: 'rgba(90, 142, 162, 0.2)' }, 'typeIcon': SteelTypeIcon },
    'fire': { 'logo': FireLogo, 'color': { name: 'Fire', primary: 'rgba(255, 151, 65, 1)', secondary: 'rgba(255, 151, 65, 0.2)' }, 'typeIcon': FireTypeIcon },
    'water': { 'logo': WaterLogo, 'color': { name: 'Water', primary: 'rgba(54, 146, 220, 1)', secondary: 'rgba(54, 146, 220, 0.2)' }, 'typeIcon': WaterTypeIcon },
    'grass': { 'logo': GrassLogo, 'color': { name: 'Grass', primary: 'rgba(58, 255, 86, 1)', secondary: 'rgba(58, 255, 86, 0.2)' }, 'typeIcon': GrassTypeIcon },
    'electric': { 'logo': ElectricLogo, 'color': { name: 'Electric', primary: 'rgba(251, 209, 0, 1)', secondary: 'rgba(251, 209, 0, 0.2)' }, 'typeIcon': ElectricTypeIcon },
    'psychic': { 'logo': PsychicLogo, 'color': { name: 'Psychic', primary: 'rgba(255, 102, 117, 1)', secondary: 'rgba(255, 102, 117, 0.2)' }, 'typeIcon': PsychicTypeIcon },
    'ice': { 'logo': IceLogo, 'color': { name: 'Ice', primary: 'rgba(76, 209, 192, 1)', secondary: 'rgba(76, 209, 192, 0.2)' }, 'typeIcon': IceTypeIcon },
    'dragon': { 'logo': DragonLogo, 'color': { name: 'Dragon', primary: 'rgba(0, 111, 201, 1)', secondary: 'rgba(0, 111, 201, 0.2)' }, 'typeIcon': DragonTypeIcon },
    'dark': { 'logo': DarkLogo, 'color': { name: 'Dark', primary: 'rgba(255, 255, 255, 1)', secondary: 'rgba(255, 255, 255, 0.2)' }, 'typeIcon': DarkTypeIcon },
    'fairy': { 'logo': FairyLogo, 'color': { name: 'Fairy', primary: 'rgba(251, 137, 235, 1)', secondary: 'rgba(251, 137, 235, 0.2)' }, 'typeIcon': FairyTypeIcon }
};

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
            const pokemon = pokemonTypeIcons[response.data.types[0].type.name];
            const pokemonTypesIcons = response.data.types.map(type => pokemonTypeIcons[type.type.name]);

            const pkData = [
                { 'key': 'general', 'general': {
                    'height': response.data.height,
                    'weight': response.data.weight,
                    'types': pokemonTypesIcons
                }},
                { 'key': 'stats', 'stats': response.data.stats },
                { 'key': 'abilities', 'abilities': {} },
                { 'key': 'moves', 'moves': {}},
                { 'key': 'locations', 'types': {} },
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

        const getPokemonGeneralData = async (id, name) => {
            console.log("getPokemonGeneralData iniciado");
            console.log(tabDescriptionData);
            console.log(pokemon);
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

                console.log("location");
                console.log(location);
            } else {
                console.log("Tab description data is not null");
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
                    case 'moves':
                        setTabDescriptionData({evolutions, evolutionTriggers, encounterMethod, location, species, abilities: abilitiesMem});
                        break;
                    case 'locations':
                        setTabDescriptionData({evolutions, evolutionTriggers, encounterMethod, location, species, abilities: abilitiesMem});
                        break;
                    default:
                        setTabDescriptionData({evolutions, evolutionTriggers, encounterMethod, location, species, abilities: abilitiesMem});
                        break;
                }
            }
            console.log("getPokemonGeneralData finalizado");
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
        pokemonTypeIcons,
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