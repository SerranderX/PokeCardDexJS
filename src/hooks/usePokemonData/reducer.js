import { actionTypes } from '@hooks/usePokemonData/actionTypes'

const reducerObject = (state, payload) => ({
    [actionTypes.SET_POKEMON_DATA]: {
        ...state,
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
        famaleOn: payload.famaleOn,
        legendary: payload.legendary,
    },
    [actionTypes.SET_CHARACTER_SELECT]: {
        ...state,
        characterSelect: payload,
        onLoadDescription: true,
    },
    [actionTypes.SET_SELECTED_TAB]: {
        ...state,
        selectedTab: payload,
        onLoadDescription: true,
    },
    [actionTypes.SET_ON_SOUND]: { ...state, onSound: payload },
    [actionTypes.SET_TAB_DESCRIPTION_DATA]: {
        ...state,
        tabDescriptionData: payload,
        onLoadDescription: false,
    },
    [actionTypes.CHANGE_LOADING]: { ...state, onLoadDescription: payload },
    [actionTypes.SET_SHINNY_ON]: { ...state, shinnyOn: payload },
    [actionTypes.SET_FAMALE_ON]: { ...state, famaleOn: payload },
    [actionTypes.SET_AUTO_SOUND]: { ...state, autoSound: payload },
    [actionTypes.SET_ENABLE_EFFECT]: { ...state, enableEffect: payload },
    [actionTypes.SET_LEGENDARY]: { ...state, legendary: payload },
    [actionTypes.LOAD_POKEMON_CARD]: {
        ...state,
        characterSelect: payload.characterSelect,
        selectedTab: payload.selectedTab,
        pokemonData: payload.pokemonData,
        pokemonBackground: payload.pokemonBackground,
        logoType: payload.logoType,
        pokemon: payload.pokemon,
        selectedId: payload.selectedId,
        infoShared: payload.infoShared,
        legendary: payload.legendary
    },
})

export const reducer = (state, action) => {
    return reducerObject(state, action.payload)?.[action.type] ?? state
}