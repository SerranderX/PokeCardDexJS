import { useEffect, useState } from 'react'
import { useWindowsDimensions } from '@hooks/useWindowsDimensions'

const validateCardDimensions = (windowWidth = null, windowHeight = null) => {
  let cardHeight = 700
  let cardWidth = 700 / 1.5

  if(windowWidth != null && windowHeight != null){
    if (windowWidth <= cardWidth) {
      cardWidth = windowWidth - 60
      cardHeight = cardWidth * 1.5
    }
  
    if (windowHeight <= cardHeight) {
      cardHeight = windowHeight
      cardWidth = cardHeight / 1.5
    }
  }

  return {
    cardWidth: cardWidth,
    cardHeight: cardHeight,
  }
}

const useChangeCardDimensions = () => {
  const { windowDimenion } = useWindowsDimensions()
  const [cardDimensions, setCardDimensions] = useState(validateCardDimensions(windowDimenion.winWidth, windowDimenion.winHeight));

  useEffect(() => {
    if(windowDimenion){
      const cardDimensionsRes = validateCardDimensions(windowDimenion.winWidth,windowDimenion.winHeight)

      if(cardDimensionsRes?.cardHeight !== cardDimensions?.cardHeight || cardDimensionsRes?.cardWidth !== cardDimensions?.cardWidth) {
        setCardDimensions(cardDimensionsRes)
      }
    }
  }, [windowDimenion]);

  return { cardDimensions };
}

export { useChangeCardDimensions }
