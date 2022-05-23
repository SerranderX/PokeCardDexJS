import { useEffect } from 'react'

const useOutsideClickEvent = (ref, state, handlerFuncion) => {
  useEffect(() => {
    //Handler click outside
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && state) {
        handlerFuncion()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, state])
}

export { useOutsideClickEvent }
