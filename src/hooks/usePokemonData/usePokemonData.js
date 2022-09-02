import { useEffect, useReducer, useCallback } from 'react'
import { pokemonTypeUtils } from '@shared/Utils'
import { useToast } from '@hooks/useToast'
import { initialState } from '@hooks/usePokemonData/initialState'
import { actionTypes } from '@hooks/usePokemonData/actionTypes'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { reducer } from '@hooks/usePokemonData/reducer'
import { ENV } from '@shared/Env'
import { languageData } from '@shared/language'
import axios from 'axios'

const usePokemonData = () => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialState }))
  const {
    selectedId,
    characterSelect,
    pokemon,
    logoType,
    pokemonBackground,
    selectedTab,
    pokemonData,
    onSound,
    onLoadDescription,
    tabDescriptionData,
    shinnyOn,
    famaleOn,
    infoShared,
    legendary
  } = state
  const [autoSound, setAutoSound] = useLocalStorage(`autoSound-${languageData.appTitle}`, true)
  const [enableEffect, setEnableEffect] = useLocalStorage(`enableEffect-${languageData.appTitle}`, true)

  //Action Creators
  const changeLoading = (data) => dispatch({ type: actionTypes.CHANGE_LOADING, payload: data })
  const changeSelectedTab = (data) => dispatch({ type: actionTypes.SET_SELECTED_TAB, payload: data })
  const setPokemonData = (data) => dispatch({ type: actionTypes.SET_POKEMON_DATA, payload: data })
  const setCharacterSelect = (data) => dispatch({ type: actionTypes.SET_CHARACTER_SELECT, payload: data })
  const setOnSound = (data) => dispatch({ type: actionTypes.SET_ON_SOUND, payload: data })
  const setTabDescriptionData = (data) => dispatch({ type: actionTypes.SET_TAB_DESCRIPTION_DATA, payload: data })
  const setShinnyOn = (data) => dispatch({ type: actionTypes.SET_SHINNY_ON, payload: data })
  const setFamaleOn = (data) => dispatch({ type: actionTypes.SET_FAMALE_ON, payload: data })
  const setLegendary = (data) => dispatch({ type: actionTypes.SET_LEGENDARY, payload: data })
  const loadPokemonCard = (data) => dispatch({ type: actionTypes.LOAD_POKEMON_CARD, payload: data })

  useEffect(() => {
    const getPokemon = async () => {
      const pokemon = pokemonTypeUtils[characterSelect.types[0].type.name]
      const pokemonTypesIcons = characterSelect.types.map(
        (type) => pokemonTypeUtils[type.type.name]
      )

      const pokemonData = [
        {
          key: 'general',
          general: {
            height: characterSelect.height,
            weight: characterSelect.weight,
            types: pokemonTypesIcons,
          },
          description: 'Here you can see the general pokemon information.',
        },
        {
          key: 'stats',
          stats: characterSelect.stats,
          description: 'Here you can see check the pokemon stats.',
        },
        {
          key: 'abilities',
          abilities: {},
          description: 'Here you can see check the pokemon abilities.',
        },
        {
          key: 'moves',
          moves: {},
          description:
            'Here you can see check the pokemon moves in any pokemon game version.',
        },
        {
          key: 'locations',
          types: {},
          description:
            'Here you can see check the pokemon location apears, in any pokemon game version.',
        },
      ]

      const hasFamaleData = characterSelect.sprites.front_female === null ? false : true

      const isSeudoLegendary = characterSelect.stats.map(item => item.base_stat ).reduce((a,b) => a + b, 0) === 600

      loadPokemonCard({
        characterSelect: characterSelect,
        selectedTab: pokemonData[0],
        pokemonData: pokemonData,
        pokemonBackground: pokemon.color,
        logoType: pokemon.logo,
        pokemon: characterSelect,
        selectedId: characterSelect,
        infoShared: {
          hasFamaleData: hasFamaleData,
        },
        legendary: isSeudoLegendary
      })

      if (autoSound) {
        playPokemonSound(0.1, characterSelect.name)
      }
    }
    const getPokemonGeneralData = async (id) => {
      if (tabDescriptionData === null) {
        
        const species = await axios.get(`${ENV.pokeApiURL}pokemon-species/${id}`)
        .then((response) => response.data)
        .catch(() => null)
        const location = await axios.get(pokemon.location_area_encounters)
        .then((response) => response.data)
        .catch(() => null)
        
        if (species != null) {
          const evolutions = await axios.get(species.evolution_chain.url)
          .then((response) => response.data)
          .catch(() => null)
          setTabDescriptionData({
            evolutions,
            location,
            species,
          })
        } else {
          setTabDescriptionData({
            location,
            species
          })
        }

        if ((species?.is_legendary == true && !legendary) || (species?.is_mythical == true && !legendary)) {
          setLegendary(true)
        }

      } else {
        const evolutionTriggers = tabDescriptionData.evolutionTriggers
        const species = tabDescriptionData.species
        const location = tabDescriptionData.location
        const evolutions = tabDescriptionData.evolutions
        const abilitiesMem = tabDescriptionData?.abilities ?? null

        switch (selectedTab.key) {
          case 'stats':
            changeLoading(false)
            break
          case 'abilities':
            if (abilitiesMem === null) {
              const abilities = await  Promise.all(pokemon.abilities.map(async (item) => {
                const ability = await axios.get(item.ability.url).then((response) => response.data).catch(() => null)
                if (ability !== null) {
                  return { name: ability.name, data: ability }
                }
              }));

              setTabDescriptionData({
                evolutions,
                evolutionTriggers,
                location,
                species,
                abilities,
              })
            } else {
              changeLoading(false)
            }
            break
          case 'locations':
            setTabDescriptionData({
              evolutions,
              evolutionTriggers,
              location,
              species,
              abilities: abilitiesMem,
            })
            break
          default:
            changeLoading(false)
            break
        }
      }
    }

    if (characterSelect != null && selectedTab == null && pokemon == null) {
      getPokemon(characterSelect.name)
    } else if (onLoadDescription && pokemon != null) {
      getPokemonGeneralData(pokemon.id, pokemon.name)
    }
  }, [characterSelect, onLoadDescription, selectedTab, shinnyOn, famaleOn])

  const openPokemonCard = (item) => {
      setCharacterSelect(item)
  }

  const validateCardToClose = () => {
    if (selectedId != null) {
      closePokemonCard()
    }
  }

  const getPokemonCard = useCallback((item) => {
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
        hasFamaleData: false,
      },
      legendary: false,
    })
    setCharacterSelect(item)
  })

  const closePokemonCard = useCallback(() => {
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
        hasFamaleData: false,
      },
      legendary: false,
    })
  })

  const playPokemonSound = useCallback((volume, name) => {
    const audio = new Audio(
      `${ENV.pokemonShowdown}/audio/cries/${name}.mp3`
    )
    audio.volume = volume
    audio
      .play()
      .then(() => {
        setOnSound(true)
        setTimeout(() => {
          setOnSound(false)
        }, 1000)
      })
      .catch(() => {
        if (volume !== 0.15) {
          useToast({
            message: 'Sorry but we don`t have the sound of this pokemon.',
            type: 'error',
            color: 'red',
            bkgColor: '#b64e71'
          })
        }
      })
  })

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
    infoShared,
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

export { usePokemonData }