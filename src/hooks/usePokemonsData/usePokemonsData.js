import { useEffect, useReducer, useCallback } from 'react'
import { actionTypes } from '@hooks/usePokemonsData/actionTypes'
import { initialState } from '@hooks/usePokemonsData/initialState'
import { reducer } from '@hooks/usePokemonsData/reducer'
import { pokemonTypeUtils, pokemonHomeCardsReq } from '@shared/Utils'
import { useToast } from '@hooks/useToast'
import { ENV } from '@shared/Env'
import axios from 'axios'

const usePokemonsData = () => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialState }))
  const {
    characters,
    generacion,
    loading,
    error,
    offSet,
    pokedexPage,
    search,
    pokemonsHomePage
  } = state
  const generationRanges = [
    { range: 151, generation: 1}, 
    { range: 251, generation: 2}, 
    { range: 386, generation: 3}, 
    { range: 493, generation: 4}, 
    { range: 649, generation: 5}, 
    { range: 721, generation: 6}, 
    { range: 809, generation: 7},
    { range: 1118, generation: 8},
  ]

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  //ACTION CREATORS
  const cargarPokemons = (data) =>
    dispatch({ type: actionTypes.CARGAR_POKEMONS, payload: data })
  const cargarPokemonsHomePage = (data) =>
    dispatch({ type: actionTypes.CARGAR_POKEMONS_HOME_PAGE, payload: data })
  const setGeneracion = (data) =>
    dispatch({ type: actionTypes.SET_GENERACION, payload: data })
  const setPokedexPage = (data) =>
    dispatch({ type: actionTypes.SET_POKEDEX_PAGE, payload: data })
  const setSearch = (data) =>
    dispatch({ type: actionTypes.SET_SEARCH, payload: data })

  useEffect(() => {
    const getPokemons = async () => {
      if(!pokedexPage) return;

      let limit
      let offSet


      switch (generacion) {
        case 1:
          limit = 151
          offSet = 0
          break
        case 2:
          limit = 100
          offSet = 151
          break
        case 3:
          limit = 135
          offSet = 251
          break
        case 4:
          limit = 107
          offSet = 386
          break
        case 5:
          limit = 156
          offSet = 493
          break
        case 6:
          limit = 72
          offSet = 649
          break
        case 7:
          limit = 88
          offSet = 721
          break
        case 8:
          limit = 1118
          offSet = 809
          break
        default:
          break
      }

      try {
        const response = await axios.get(
          `${ENV.pokeApiURL}pokemon?limit=${limit}&offset=${offSet}`
        )

        const resultset = await Promise.all(response.data.results.map(async (pokemon) => {

          const response = await axios.get(pokemon.url).then(res => res.data)

          const pokemonTypesIcons = response.types.map(
            (type) => pokemonTypeUtils[type.type.name]
          )

          response.pokemonTypeUtils = pokemonTypesIcons
          response.generation = findPokemonGeneration(response)

          return response
        }));
        cargarPokemons({ characters: resultset, offSet: offSet })
      } catch (error) {
        useToast({
          message:
            'Sorry but something was wrong with trying to get the pokemons data.',
          type: 'warning',
          color: 'red',
        })
      }
    }

    const pokemonsHomePage = async () => {
      if(pokemonsHomePage.length > 0) return;

      const responsePokemons = await Promise.all(pokemonHomeCardsReq.map(async (item) => {
        const response = await axios.get(item.url).then(res => res.data).catch(error => console.error("Error", error));
        item.data = response;
        item.data.generation = findPokemonGeneration(item.data);

        return item
      }))

      cargarPokemonsHomePage(responsePokemons)
    }

    getPokemons()
    pokemonsHomePage()
  }, [generacion, pokedexPage])

  const findPokemonGeneration = useCallback((pokemonData) => {
    var generationMatch = false;
    return generationRanges.filter((gen, index) => {
      if (pokemonData.id <= gen.range && !generationMatch) {
        generationMatch = true;
        return gen
      }
      if(index === generationRanges.length - 1 && !generationMatch) return gen
    }).map(genFinded => genFinded.generation)
  })

  return {
    characters,
    generacion,
    loading,
    error,
    setGeneracion,
    offSet,
    setPokedexPage,
    pokedexPage,
    search,
    handleSearch,
    pokemonsHomePage
  }
}

export { usePokemonsData }
