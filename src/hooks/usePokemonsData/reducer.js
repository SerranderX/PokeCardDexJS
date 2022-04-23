import { actionTypes } from '@hooks/usePokemonsData/actionTypes'

const reducerObject = (state, payload) => ({
    [actionTypes.CARGAR_POKEMONS]: {
        ...state,
        characters: payload.characters,
        offSet: payload.offSet,
        loading: false,
        search: '',
    },
    [actionTypes.SET_GENERACION]: {
        ...state,
        generacion: payload,
        loading: true,
    },
    [actionTypes.SET_POKEDEX_PAGE]: { ...state, pokedexPage: payload },
    [actionTypes.SET_SEARCH]: { ...state, search: payload },
})

export const reducer = (state, action) => {
    return reducerObject(state, action.payload)?.[action.type] ?? state
}