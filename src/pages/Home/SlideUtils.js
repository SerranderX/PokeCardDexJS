import { ENV } from '@shared/Env'
 
const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

const pokemonCard = [
    { name: 'pikachu', url: `${ENV.pokeApiURL}25/` },
    { name: 'mew', url: `${ENV.pokeApiURL}151/` },
    { name: 'moltres', url: `${ENV.pokeApiURL}146/` },
    { name: 'aegislash-shield', url: `${ENV.pokeApiURL}681/` },
    { name: 'kyogre', url: `${ENV.pokeApiURL}382/` },
    { name: 'sylveon', url: `${ENV.pokeApiURL}700/` },
    { name: 'lucario', url: `${ENV.pokeApiURL}448/` },
    { name: 'buzzwole', url: `${ENV.pokeApiURL}794/` },
    { name: 'gengar-gmax', url: `${ENV.pokeApiURL}10202/` },
    { name: 'bouffalant', url: `${ENV.pokeApiURL}626/` },
    { name: 'toxicroak', url: `${ENV.pokeApiURL}454/` },
    { name: 'sableye', url: `${ENV.pokeApiURL}302/` },
    { name: 'tyranitar', url: `${ENV.pokeApiURL}248/` },
    { name: 'corvisquire', url: `${ENV.pokeApiURL}822/` },
  ]

  const variantsSlide = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
            duration: 0.1
        }
      }
    },
  }

export {variantsSlide, pokemonCard, swipePower, swipeConfidenceThreshold};