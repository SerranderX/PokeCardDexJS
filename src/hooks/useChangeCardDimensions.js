import { useEffect } from 'react'

const validateCardDimensions = (windowWidth, windowHeight) => {
  let cardHeight = 700
  let cardWidth = 700 / 1.5

  if (windowWidth <= cardWidth) {
    cardWidth = windowWidth - 60
    cardHeight = cardWidth * 1.5
  }

  if (windowHeight <= cardHeight) {
    cardHeight = windowHeight
    cardWidth = cardHeight / 1.5
  }

  return {
    cardWidth: cardWidth,
    cardHeight: cardHeight,
  }
}

const useChangeCardDimensions = (
  cardRef,
  windowDimenion,
  setCardDimensions,
  detectHW
) => {
  useEffect(() => {
    window.addEventListener('resize', detectSize)

    if (cardRef && detectSize) {
      const cardDimensions = validateCardDimensions(
        windowDimenion.winWidth,
        windowDimenion.winHeight
      )
      setCardDimensions(cardDimensions)
    }

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }
}

export { useChangeCardDimensions, validateCardDimensions }
