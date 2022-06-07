import { useRef, useEffect } from 'react'

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 })

  console.log(".")

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth
    dimensions.current.height = ref.current.offsetHeight
  }, [])

  return dimensions.current
}

export { useDimensions }
