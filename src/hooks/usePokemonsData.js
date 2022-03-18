import { useEffect, useReducer } from 'react';
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const versions = [{"id":0,"version":{"name":"red-blue","url":"https://pokeapi.co/api/v2/version-group/1/"}},{"id":1,"version":{"name":"yellow","url":"https://pokeapi.co/api/v2/version-group/2/"}},{"id":2,"version":{"name":"gold-silver","url":"https://pokeapi.co/api/v2/version-group/3/"}},{"id":3,"version":{"name":"crystal","url":"https://pokeapi.co/api/v2/version-group/4/"}},{"id":4,"version":{"name":"ruby-sapphire","url":"https://pokeapi.co/api/v2/version-group/5/"}},{"id":5,"version":{"name":"emerald","url":"https://pokeapi.co/api/v2/version-group/6/"}},{"id":6,"version":{"name":"firered-leafgreen","url":"https://pokeapi.co/api/v2/version-group/7/"}},{"id":7,"version":{"name":"diamond-pearl","url":"https://pokeapi.co/api/v2/version-group/8/"}},{"id":8,"version":{"name":"platinum","url":"https://pokeapi.co/api/v2/version-group/9/"}},{"id":9,"version":{"name":"heartgold-soulsilver","url":"https://pokeapi.co/api/v2/version-group/10/"}},{"id":10,"version":{"name":"black-white","url":"https://pokeapi.co/api/v2/version-group/11/"}},{"id":11,"version":{"name":"colosseum","url":"https://pokeapi.co/api/v2/version-group/12/"}},{"id":12,"version":{"name":"xd","url":"https://pokeapi.co/api/v2/version-group/13/"}},{"id":13,"version":{"name":"black-2-white-2","url":"https://pokeapi.co/api/v2/version-group/14/"}},{"id":14,"version":{"name":"x-y","url":"https://pokeapi.co/api/v2/version-group/15/"}},{"id":15,"version":{"name":"omega-ruby-alpha-sapphire","url":"https://pokeapi.co/api/v2/version-group/16/"}},{"id":16,"version":{"name":"sun-moon","url":"https://pokeapi.co/api/v2/version-group/17/"}},{"id":17,"version":{"name":"ultra-sun-ultra-moon","url":"https://pokeapi.co/api/v2/version-group/18/"}},{"id":18,"version":{"name":"lets-go-pikachu-lets-go-eevee","url":"https://pokeapi.co/api/v2/version-group/19/"}},{"id":19,"version":{"name":"sword-shield","url":"https://pokeapi.co/api/v2/version-group/20/"}}];

const usePokemonsData = () => {
    const [state, dispatch] = useReducer(reducer, initialState({ initialState }));
    const { characters, generacion, loading, error, offSet } = state;

    //ACTION CREATORS
    const cargarPokemons = (data) => dispatch({ type: actionTypes.CARGAR_POKEMONS, payload: data });
    const setGeneracion = (data) => dispatch({ type: actionTypes.SET_GENERACION, payload: data });

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
                cargarPokemons({ characters: response.data.results, offSet: offSet});
            } catch(error) {
                console.error("Error: ", error);
            } 
        }

        getPokemons();
    }, [generacion]);

    const getGeneration = (genReq) => {
        if(genReq !== generacion) { setGeneracion(genReq) };
    }

    return { characters, generacion, loading, error, getGeneration, offSet, versions };
};

const initialState = () => ({
    characters: [],
    loading: true,
    error: false,
    generacion: 1,
    offSet: 0
});

const reducerObject = (state, payload) => ({
    [actionTypes.CARGAR_POKEMONS]: { ...state, characters: payload.characters, offSet: payload.offSet, loading: false },
    [actionTypes.SET_GENERACION]: { ...state, generacion: payload, loading: true },
});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)?.[action.type] ?? state;
};

const actionTypes = {
    CARGAR_POKEMONS: 'CARGAR_POKEMONS',
    SET_GENERACION: 'SET_GENERACION'
}

export { usePokemonsData };