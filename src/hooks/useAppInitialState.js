import useLocalStorage from 'use-local-storage'
import { usePokemonsData } from '@hooks/usePokemonsData/usePokemonsData'
import { usePokemonData } from '@hooks/usePokemonData/usePokemonData'

function useAppInitialState() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const {
    characters,
    setGeneracion,
    generacion,
    loading,
    error,
    offSet,
    setPokedexPage,
    pokedexPage,
    search,
    handleSearch,
  } = usePokemonsData()

  const {
    openPokemonCard,
    closePokemonCard,
    selectedId,
    pokemonBackground,
    logoType,
    pokemon,
    selectedTab,
    changeSelectedTab,
    pokemonData,
    playPokemonSound,
    onSound,
    onLoadDescription,
    setShinnyOn,
    shinnyOn,
    setFamaleOn,
    famaleOn,
    infoShared,
    tabDescriptionData,
    getPokemonCard,
    autoSound,
    setAutoSound,
    enableEffect,
    setEnableEffect,
    legendary,
    characterSelect,
    validateCardToClose
  } = usePokemonData()


  const getGeneration = (genReq) => {
    if (genReq !== generacion) {
      setGeneracion(genReq)
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }


  const openPokemonCardHandler = (item) => {
    if(pokedexPage){
      document.documentElement.style.overflow = "hidden";
    }
    openPokemonCard(item)
  }

  const closePokemonCardHandler = () => {
    if(pokedexPage){
      document.documentElement.style.overflow = "";
    }
    closePokemonCard()
  }

  return {
    theme,
    toggleTheme,

    characters,
    getGeneration,
    generacion,
    loading,
    error,
    offSet,
    setPokedexPage,
    pokedexPage,
    search,
    handleSearch,

    openPokemonCard: openPokemonCardHandler,
    closePokemonCard: closePokemonCardHandler ,
    selectedId,
    pokemonBackground,
    logoType,
    pokemon,
    selectedTab,
    changeSelectedTab,
    pokemonData,
    playPokemonSound,
    onSound,
    onLoadDescription,
    setShinnyOn,
    shinnyOn,
    setFamaleOn,
    famaleOn,
    infoShared,
    tabDescriptionData,
    getPokemonCard,
    autoSound,
    setAutoSound,
    enableEffect,
    setEnableEffect,
    legendary,
    characterSelect,
    validateCardToClose
  }
}

export { useAppInitialState }