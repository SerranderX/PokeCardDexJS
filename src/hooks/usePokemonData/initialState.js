export const initialState = () => {

    const initialState = {
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
            hasFamaleData: false,
        },
        legendary: false,
    }
    return initialState;
}