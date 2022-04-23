import { useEffect, useReducer, useCallback } from 'react'
import { actionTypes } from '@hooks/usePokemonsData/actionTypes'
import { initialState } from '@hooks/usePokemonsData/initialState'
import { reducer } from '@hooks/usePokemonsData/reducer'
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
  } = state

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  //ACTION CREATORS
  const cargarPokemons = (data) =>
    dispatch({ type: actionTypes.CARGAR_POKEMONS, payload: data })
  const setGeneracion = (data) =>
    dispatch({ type: actionTypes.SET_GENERACION, payload: data })
  const setPokedexPage = (data) =>
    dispatch({ type: actionTypes.SET_POKEDEX_PAGE, payload: data })
  const setSearch = (data) =>
    dispatch({ type: actionTypes.SET_SEARCH, payload: data })

  useEffect(() => {
    const getPokemons = async () => {
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
          `${ENV.pokeApiURL}?limit=${limit}&offset=${offSet}`
        )
        cargarPokemons({ characters: response.data.results, offSet: offSet })
      } catch (error) {
        useToast({
          message:
            'Sorry but something was wrong with trying to get the pokemons data.',
          type: 'warning',
          color: 'red',
        })
      }
    }

    getPokemons()
  }, [generacion])

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
  }
}

export { usePokemonsData }
