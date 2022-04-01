import { useEffect, useReducer } from 'react';
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const usePokemonsData = () => {

    const [state, dispatch] = useReducer(reducer, initialState({ initialState }));
    const { characters, generacion, loading, error, offSet, pokedexPage, search } = state;

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    //ACTION CREATORS
    const cargarPokemons = (data) => dispatch({ type: actionTypes.CARGAR_POKEMONS, payload: data });
    const setGeneracion = (data) => dispatch({ type: actionTypes.SET_GENERACION, payload: data });
    const setPokedexPage = (data) => dispatch({ type: actionTypes.SET_POKEDEX_PAGE, payload: data });
    const setSearch = (data) => dispatch({ type: actionTypes.SET_SEARCH, payload: data });

    useEffect(() => {
        const getPokemons = async () => {
            let limit;
            let offSet;

            switch (generacion) {
                case 1:
                    limit = 151;
                    offSet = 0;
                    break;
                case 2:
                    limit = 100;
                    offSet = 151;
                    break;
                case 3:
                    limit = 135;
                    offSet = 251;
                    break;
                case 4:
                    limit = 107;
                    offSet = 386;
                    break;
                case 5:
                    limit = 156;
                    offSet = 493;
                    break;
                case 6:
                    limit = 72;
                    offSet = 649;
                    break;
                case 7:
                    limit = 88;
                    offSet = 721;
                    break;
                case 8:
                    limit = 1118;
                    offSet = 809;
                    break;
                default:
                    break;
            }

            try {
                const response = await axios.get(`${API_URL}?limit=${limit}&offset=${offSet}`);
                cargarPokemons({ characters: response.data.results, offSet: offSet });
            } catch (error) {
                console.error("Error: ", error);
            }
        }

        getPokemons();
    }, [generacion]);

    const getGeneration = (genReq) => {
        if (genReq !== generacion) { setGeneracion(genReq) }
    }

    return { 
        characters,
        generacion, 
        loading, 
        error, 
        getGeneration, 
        offSet, 
        setPokedexPage, 
        pokedexPage, 
        search, 
        handleSearch };
};

const initialState = () => ({
    characters: [],
    loading: true,
    error: false,
    generacion: 1,
    offSet: 0,
    pokedexPage: false,
    search: '',
});

const reducerObject = (state, payload) => ({
    [actionTypes.CARGAR_POKEMONS]: { ...state, characters: payload.characters, offSet: payload.offSet, loading: false, search: '' },
    [actionTypes.SET_GENERACION]: { ...state, generacion: payload, loading: true },
    [actionTypes.SET_POKEDEX_PAGE]: { ...state, pokedexPage: payload },
    [actionTypes.SET_SEARCH]: { ...state, search: payload },
});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)?.[action.type] ?? state;
};

const actionTypes = {
    CARGAR_POKEMONS: 'CARGAR_POKEMONS',
    SET_GENERACION: 'SET_GENERACION',
    SET_POKEDEX_PAGE: 'SET_POKEDEX_PAGE',
    SET_SEARCH: 'SET_SEARCH',
}

export { usePokemonsData };