import { ENV } from '@shared/Env'
import AboutIcon from '@icons/about.jsx'
import PokedexIcon from '@icons/pokeball.jsx'
import HomeIcon from '@icons/home.jsx'
import ArrowDownIcon from '@icons/arrowDown.jsx'
import lvlUpIcon from '@images/lvlup.png'
import machineIcon from '@images/disc.png'
import eggIcon from '@images/egg.png'
import physicalIcon from '@images/physicalIcon.png'
import specialIcon from '@images/specialIcon.png'
import statusIcon from '@images/statusIcon.png'
import BugLogo from '@icons/Types/Bug_Type_Icon.svg'
import DarkLogo from '@icons/Types/Dark_Type_Icon.svg'
import DragonLogo from '@icons/Types/Dragon_Type_Icon.svg'
import FairyLogo from '@icons/Types/Fairy_Type_Icon.svg'
import FightingLogo from '@icons/Types/Fighting_Type_Icon.svg'
import FireLogo from '@icons/Types/Fire_Type_Icon.svg'
import FlyingLogo from '@icons/Types/Flying_Type_Icon.svg'
import GhostLogo from '@icons/Types/Ghost_Type_Icon.svg'
import GrassLogo from '@icons/Types/Grass_Type_Icon.svg'
import GroundLogo from '@icons/Types/Ground_Type_Icon.svg'
import ElectricLogo from '@icons/Types/Electric_Type_Icon.svg'
import IceLogo from '@icons/Types/Ice_Type_Icon.svg'
import PoisonLogo from '@icons/Types/Poison_Type_Icon.svg'
import PsychicLogo from '@icons/Types/Psychic_Type_Icon.svg'
import NormalLogo from '@icons/Types/Normal_Type_Icon.svg'
import WaterLogo from '@icons/Types/Water_Type_Icon.svg'
import RockLogo from '@icons/Types/Rock_Type_Icon.svg'
import SteelLogo from '@icons/Types/Steel_Type_Icon.svg'
import ForestBKG from '@images/forest.jpg'
import Grass1BKG from '@images/grass1.jpg'
import Grass2BKG from '@images/grass2.jpg'
import Night1BKG from '@images/night1.jpg'
import Night2BKG from '@images/night2.jpg'
import Sky1BKG from '@images/sky1.jpg'
import Sky2BKG from '@images/sky2.jpg'
import Fire1BKG from '@images/fire1.jpg'
import Fire2BKG from '@images/fire2.jpg'
import Water1BKG from '@images/water1.jpg'
import Water2BKG from '@images/water2.jpg'
import FightingBKG from '@images/fighting.jpg'
import GhostBKG from '@images/ghost.jpg'
import WSXP from '@images/WSXP.jpg'

const toUpperCaseIndex = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const transformVerString = (text) => {
  const regex = /(-)/g
  const found = text.match(regex)
  let formatedStr = ''

  if (found) {
    if (found.length === 3) {
      const pSplited = text.split('-')
      pSplited.forEach((word, index) => {
        if (index === 0) {
          formatedStr += `${word} `
        } else if (index > 0 && index < 2) {
          formatedStr += `${word} & `
        } else if (index !== pSplited.length - 1) {
          formatedStr += `${word} `
        } else {
          formatedStr += word
        }
      })
    } else if (found.length > 3) {
      formatedStr = text.includes('-') ? text.replace(/-/g, ' ') : text
    }
  }

  if (formatedStr.length === 0) {
    formatedStr = text.includes('-') ? text.replace(/-/g, ' & ') : text
  }

  return formatedStr.replace(/(\r\n|\n|\r|\f)/gm, ' ')
}

const transformString = (text) => {
  return text.replace(/(\r\n|\n|\r|\f|-)/gm, ' ')
}

const pokemonHomeCardsReq = [
  { name: 'pikachu', url: `${ENV.pokeApiURL}pokemon/25/` },
  { name: 'mew', url: `${ENV.pokeApiURL}pokemon/151/` },
  { name: 'moltres', url: `${ENV.pokeApiURL}pokemon/146/` },
  { name: 'aegislash-shield', url: `${ENV.pokeApiURL}pokemon/681/` },
  { name: 'kyogre', url: `${ENV.pokeApiURL}pokemon/382/` },
  { name: 'sylveon', url: `${ENV.pokeApiURL}pokemon/700/` },
  { name: 'lucario', url: `${ENV.pokeApiURL}pokemon/448/` },
  { name: 'buzzwole', url: `${ENV.pokeApiURL}pokemon/794/` },
  { name: 'gengar-gmax', url: `${ENV.pokeApiURL}pokemon/10202/` },
  { name: 'bouffalant', url: `${ENV.pokeApiURL}pokemon/626/` },
  { name: 'toxicroak', url: `${ENV.pokeApiURL}pokemon/454/` },
  { name: 'sableye', url: `${ENV.pokeApiURL}pokemon/302/` },
  { name: 'tyranitar', url: `${ENV.pokeApiURL}pokemon/248/` },
  { name: 'corvisquire', url: `${ENV.pokeApiURL}pokemon/822/` },
]

const navMenu = [
  {
    name: 'Home',
    icon: HomeIcon,
    link: '/',
  },
  {
    name: 'Pokedex',
    icon: PokedexIcon,
    iconDrag: ArrowDownIcon,
    link: '/pokedex',
    subMenu: [
      {
        name: 'Generation I',
        icons: [
          {
            type: 'legendary',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
          },
          {
            name: 'glass',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          },
          {
            type: 'fire',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
          },
          {
            type: 'water',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
          },
        ],
      },
      {
        name: 'Generation II',
        icons: [
          {
            type: 'legendary',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png',
          },
          {
            name: 'glass',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
          },
          {
            type: 'fire',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
          },
          {
            type: 'water',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
          },
        ],
      },
      {
        name: 'Generation III',
        icons: [
          {
            type: 'legendary',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png',
          },
          {
            name: 'glass',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png',
          },
          {
            type: 'fire',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png',
          },
          {
            type: 'water',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png',
          },
        ],
      },
      {
        name: 'Generation IV',
        icons: [
          {
            type: 'legendary',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png',
          },
          {
            name: 'glass',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png',
          },
          {
            type: 'fire',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png',
          },
          {
            type: 'water',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png',
          },
        ],
      },
      {
        name: 'Generation V',
        icons: [
          {
            type: 'legendary',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png',
          },
          {
            name: 'glass',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png',
          },
          {
            type: 'fire',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png',
          },
          {
            type: 'water',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png',
          },
        ],
      },
      {
        name: 'Generation VI',
        icons: [
          {
            type: 'legendary',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png',
          },
          {
            name: 'glass',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png',
          },
          {
            type: 'fire',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png',
          },
          {
            type: 'water',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png',
          },
        ],
      },
      {
        name: 'Generation VII',
        icons: [
          {
            type: 'legendary',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png',
          },
          {
            name: 'glass',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png',
          },
          {
            type: 'fire',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png',
          },
          {
            type: 'water',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png',
          },
        ],
      },
      {
        name: 'Generation VIII',
        icons: [
          {
            type: 'legendary',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png',
          },
          {
            name: 'glass',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png',
          },
          {
            type: 'fire',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png',
          },
          {
            type: 'water',
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png',
          },
        ],
      },
    ],
  },
  {
    name: 'About',
    icon: AboutIcon,
    link: '/about',
  },
]

const pokemonTypeUtils = {
  normal: {
    logo: NormalLogo,
    color: {
      name: 'Normal',
      primary: (opacity = '0.7') => `rgba(145, 154, 162, ${opacity})`,
      secondary: 'rgb(72, 76, 79)',
    },
  },
  fighting: {
    logo: FightingLogo,
    color: {
      name: 'Fighting',
      primary: (opacity = '0.7') => `rgba(224, 48, 106, ${opacity})`,
      secondary: 'rgb(93, 31, 50)',
    },
  },
  flying: {
    logo: FlyingLogo,
    color: {
      name: 'Flying',
      primary: (opacity = '0.7') => `rgba(137, 170, 227, ${opacity})`,
      secondary: 'rgb(61, 73, 92)',
    },
  },
  poison: {
    logo: PoisonLogo,
    color: {
      name: 'Poison',
      primary: (opacity = '0.7') => `rgba(181, 103, 206, ${opacity})`,
      secondary: 'rgb(83, 50, 94)',
    },
  },
  ground: {
    logo: GroundLogo,
    color: {
      name: 'Ground',
      primary: (opacity = '0.7') => `rgba(232, 114, 54, ${opacity})`,
      secondary: 'rgb(95, 58, 37)',
    },
  },
  rock: {
    logo: RockLogo,
    color: {
      name: 'Rock',
      primary: (opacity = '0.7') => `rgba(200, 182, 134, ${opacity})`,
      secondary: 'rgb(84, 77, 59)',
    },
  },
  bug: {
    logo: BugLogo,
    color: {
      name: 'Bug',
      primary: (opacity = '0.7') => `rgba(131, 195, 0, ${opacity})`,
      secondary: 'rgb(62, 86, 10)',
    },
  },
  ghost: {
    logo: GhostLogo,
    color: {
      name: 'Ghost',
      primary: (opacity = '0.7') => `rgba(76, 106, 178, ${opacity})`,
      secondary: 'rgb(48, 56, 80)',
    },
  },
  steel: {
    logo: SteelLogo,
    color: {
      name: 'Steel',
      primary: (opacity = '0.7') => `rgba(90, 142, 162, ${opacity})`,
      secondary: 'rgb(46, 64, 67)',
    },
  },
  fire: {
    logo: FireLogo,
    color: {
      name: 'Fire',
      primary: (opacity = '0.7') => `rgba(255, 151, 65, ${opacity})`,
      secondary: 'rgb(104, 66, 34)',
    },
  },
  water: {
    logo: WaterLogo,
    color: {
      name: 'Water',
      primary: (opacity = '0.7') => `rgba(54, 146, 220, ${opacity})`,
      secondary: 'rgb(32, 65, 93)',
    },
  },
  grass: {
    logo: GrassLogo,
    color: {
      name: 'Grass',
      primary: (opacity = '0.7') => `rgba(56, 191, 75, ${opacity})`,
      secondary: 'rgb(34, 84, 38)',
    },
  },
  electric: {
    logo: ElectricLogo,
    color: {
      name: 'Electric',
      primary: (opacity = '0.7') => `rgba(220, 184, 2, ${opacity})`,
      secondary: 'rgb(92, 79, 10)',
    },
  },
  psychic: {
    logo: PsychicLogo,
    color: {
      name: 'Psychic',
      primary: (opacity = '0.7') => `rgba(255, 102, 117, ${opacity})`,
      secondary: 'rgb(105, 50, 56)',
    },
  },
  ice: {
    logo: IceLogo,
    color: {
      name: 'Ice',
      primary: (opacity = '0.7') => `rgba(76, 209, 192, ${opacity})`,
      secondary: 'rgb(40, 93, 87)',
    },
  },
  dragon: {
    logo: DragonLogo,
    color: {
      name: 'Dragon',
      primary: (opacity = '0.7') => `rgba(0, 111, 201, ${opacity})`,
      secondary: 'rgb(11, 51, 85)',
    },
  },
  dark: {
    logo: DarkLogo,
    color: {
      name: 'Dark',
      primary: (opacity = '0.7') => `rgba(28, 28, 28, ${opacity})`,
      secondary: 'rgb(52, 57, 69)',
    },
  },
  fairy: {
    logo: FairyLogo,
    color: {
      name: 'Fairy',
      primary: (opacity = '0.7') => `rgba(220, 119, 206, ${opacity})`,
      secondary: 'rgb(94, 57, 90)',
    },
  },
}

const versions = [
  {
    id: 0,
    version: {
      name: 'red-blue',
      url: 'https://pokeapi.co/api/v2/version-group/1/',
      generation: 'generation-i',
      generation_id: 1,
    },
  },
  {
    id: 1,
    version: {
      name: 'yellow',
      url: 'https://pokeapi.co/api/v2/version-group/2/',
      generation: 'generation-i',
      generation_id: 1,
    },
  },
  {
    id: 2,
    version: {
      name: 'gold-silver',
      url: 'https://pokeapi.co/api/v2/version-group/3/',
      generation: 'generation-ii',
      generation_id: 2,
    },
  },
  {
    id: 3,
    version: {
      name: 'crystal',
      url: 'https://pokeapi.co/api/v2/version-group/4/',
      generation: 'generation-ii',
      generation_id: 2,
    },
  },
  {
    id: 4,
    version: {
      name: 'ruby-sapphire',
      url: 'https://pokeapi.co/api/v2/version-group/5/',
      generation: 'generation-iii',
      generation_id: 3,
    },
  },
  {
    id: 5,
    version: {
      name: 'emerald',
      url: 'https://pokeapi.co/api/v2/version-group/6/',
      generation: 'generation-iii',
      generation_id: 3,
    },
  },
  {
    id: 6,
    version: {
      name: 'firered-leafgreen',
      url: 'https://pokeapi.co/api/v2/version-group/7/',
      generation: 'generation-i',
      generation_id: 1,
    },
  },
  {
    id: 7,
    version: {
      name: 'diamond-pearl',
      url: 'https://pokeapi.co/api/v2/version-group/8/',
      generation: 'generation-iv',
      generation_id: 4,
    },
  },
  {
    id: 8,
    version: {
      name: 'platinum',
      url: 'https://pokeapi.co/api/v2/version-group/9/',
      generation: 'generation-iv',
      generation_id: 4,
    },
  },
  {
    id: 9,
    version: {
      name: 'heartgold-soulsilver',
      url: 'https://pokeapi.co/api/v2/version-group/10/',
      generation: 'generation-ii',
      generation_id: 2,
    },
  },
  {
    id: 10,
    version: {
      name: 'black-white',
      url: 'https://pokeapi.co/api/v2/version-group/11/',
      generation: 'generation-v',
      generation_id: 5,
    },
  },
  {
    id: 11,
    version: {
      name: 'colosseum',
      url: 'https://pokeapi.co/api/v2/version-group/12/',
      generation: 'generation-v',
      generation_id: 5,
    },
  },
  {
    id: 12,
    version: {
      name: 'xd',
      url: 'https://pokeapi.co/api/v2/version-group/13/',
      generation: 'generation-v',
      generation_id: 5,
    },
  },
  {
    id: 13,
    version: {
      name: 'black-2-white-2',
      url: 'https://pokeapi.co/api/v2/version-group/14/',
      generation: 'generation-v',
      generation_id: 5,
    },
  },
  {
    id: 14,
    version: {
      name: 'x-y',
      url: 'https://pokeapi.co/api/v2/version-group/15/',
      generation: 'generation-vi',
      generation_id: 6,
    },
  },
  {
    id: 15,
    version: {
      name: 'omega-ruby-alpha-sapphire',
      url: 'https://pokeapi.co/api/v2/version-group/16/',
      generation: 'generation-iii',
      generation_id: 3,
    },
  },
  {
    id: 16,
    version: {
      name: 'sun-moon',
      url: 'https://pokeapi.co/api/v2/version-group/17/',
      generation: 'generation-vii',
      generation_id: 7,
    },
  },
  {
    id: 17,
    version: {
      name: 'ultra-sun-ultra-moon',
      url: 'https://pokeapi.co/api/v2/version-group/18/',
      generation: 'generation-vii',
      generation_id: 7,
    },
  },
  {
    id: 18,
    version: {
      name: 'lets-go-pikachu-lets-go-eevee',
      url: 'https://pokeapi.co/api/v2/version-group/19/',
      generation: 'generation-vii',
      generation_id: 7,
    },
  },
  {
    id: 19,
    version: {
      name: 'sword-shield',
      url: 'https://pokeapi.co/api/v2/version-group/20/',
      generation: 'generation-viii',
      generation_id: 8,
    },
  },
]

const glosaryElements = [
  {
      name: 'Learned',
      data: [
        { name: 'level-up', src: lvlUpIcon },
        { name: 'machine', src: machineIcon },
        { name: 'egg', src: eggIcon },
      ]
  },
  {
      name: 'Move',
      data: [
        { name: 'physical', src: physicalIcon },
        { name: 'special', src: specialIcon },
        { name: 'status', src: statusIcon },
      ]
  }
]

const backgroundCardImages = [
  { img: ForestBKG, color: '#727a46' },
  { img: Grass1BKG, color: '#afb72a' },
  { img: Grass2BKG, color: '#72ab0a' },
  { img: Water1BKG, color: '#017e9b' },
  { img: Water2BKG, color: '#0945b2' },
  { img: Sky1BKG, color: '#9fc8ee' },
  { img: Sky2BKG, color: '#c18b99' },
  { img: Night1BKG, color: '#060604' },
  { img: Night2BKG, color: '#2f1957' },
  { img: Fire1BKG, color: '#c83402' },
  { img: Fire2BKG, color: '#c89202' },
  { img: WSXP, color: '#3a5415' },
  { img: FightingBKG, color: '#c7c9d2' },
  { img: GhostBKG, color: '#152411' },
]

const findBKGByType = (type) => {
  const typeBKG = type ? type.toLowerCase() : ''
  switch(typeBKG){
    case 'fire':
      return 9
    case 'water':
      return 4
    case 'grass':
      return 1
    case 'ice':
      return 0
    case 'poison':
      return 1
    case 'flying':
      return 2
    case 'bug':
      return 2
    case 'dragon':
      return 5
    case 'psychic':
      return 8
    case 'ghost':
      return 13
    case 'fighting':
      return 12
    default:
      return 0
  }
}

export {
  toUpperCaseIndex,
  transformString,
  transformVerString,
  navMenu,
  glosaryElements,
  pokemonTypeUtils,
  versions,
  backgroundCardImages,
  pokemonHomeCardsReq,
  findBKGByType
}
