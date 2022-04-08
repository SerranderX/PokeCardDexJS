
import AboutIcon from "../assets/icons/about.jsx";
import PokedexIcon from "../assets/icons/pokeball.jsx";
import HomeIcon from "../assets/icons/home.jsx";
import ArrowDownIcon from "../assets/icons/arrowDown.jsx";
import lvlUpIcon from '../assets/images/lvlup.png';
import machineIcon from '../assets/images/disc.png';
import eggIcon from '../assets/images/egg.png';
import physicalIcon from '../assets/images/physicalIcon.png';
import specialIcon from '../assets/images/specialIcon.png';
import statusIcon from '../assets/images/statusIcon.png';
import BugLogo from '../assets/icons/Types/Bug_Type_Icon.svg';
import DarkLogo from '../assets/icons/Types/Dark_Type_Icon.svg';
import DragonLogo from '../assets/icons/Types/Dragon_Type_Icon.svg';
import FairyLogo from '../assets/icons/Types/Fairy_Type_Icon.svg';
import FightingLogo from '../assets/icons/Types/Fighting_Type_Icon.svg';
import FireLogo from '../assets/icons/Types/Fire_Type_Icon.svg';
import FlyingLogo from '../assets/icons/Types/Flying_Type_Icon.svg';
import GhostLogo from '../assets/icons/Types/Ghost_Type_Icon.svg';
import GrassLogo from '../assets/icons/Types/Grass_Type_Icon.svg';
import GroundLogo from '../assets/icons/Types/Ground_Type_Icon.svg';
import ElectricLogo from '../assets/icons/Types/Electric_Type_Icon.svg';
import IceLogo from '../assets/icons/Types/Ice_Type_Icon.svg';
import PoisonLogo from '../assets/icons/Types/Poison_Type_Icon.svg';
import PsychicLogo from '../assets/icons/Types/Psychic_Type_Icon.svg';
import NormalLogo from '../assets/icons/Types/Normal_Type_Icon.svg';
import WaterLogo from '../assets/icons/Types/Water_Type_Icon.svg';
import RockLogo from '../assets/icons/Types/Rock_Type_Icon.svg';
import SteelLogo from '../assets/icons/Types/Steel_Type_Icon.svg';
import ForestBKG from '../assets/images/forest.jpg';
import Grass1BKG from '../assets/images/grass1.jpg';
import Grass2BKG from '../assets/images/grass2.jpg';
import Night1BKG from '../assets/images/night1.jpg';
import Night2BKG from '../assets/images/night2.jpg';
import Sky1BKG from '../assets/images/sky1.jpg';
import Sky2BKG from '../assets/images/sky2.jpg';
import Fire1BKG from '../assets/images/fire1.jpg';
import Fire2BKG from '../assets/images/fire2.jpg';
import Water1BKG from '../assets/images/water1.jpg';
import Water2BKG from '../assets/images/water2.jpg';
import WSXP from '../assets/images/WSXP.jpg';

const toUpperCaseIndex = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const transformVerString = (text) => {
    const regex = /(-)/g;
    const found = text.match(regex);
    let formatedStr = "";

    if (found) {
        if (found.length === 3) {
            const pSplited = text.split("-");
            pSplited.forEach((word, index) => {
                if (index === 0) {
                    formatedStr += `${word} `;
                } else if (index > 0 && index < 2) {
                    formatedStr += `${word} & `;
                } else if (index !== pSplited.length - 1) {
                    formatedStr += `${word} `;
                } else {
                    formatedStr += word;
                }
            });
        } else if (found.length > 3) {
            formatedStr = text.includes("-") ? text.replace(/-/g, " ") : text;
        }
    }

    if (formatedStr.length === 0) {
        formatedStr = text.includes("-") ? text.replace(/-/g, " & ") : text;
    }

    return formatedStr.replace(/(\r\n|\n|\r|\f)/gm, " ");
}

const transformString = (text) => {
    return text.replace(/(\r\n|\n|\r|\f|-)/gm, " ");
}

const navMenu = [
    {
        name: "Home",
        icon: HomeIcon,
        link: "/"
    },
    {
        name: "Pokedex",
        icon: PokedexIcon,
        iconDrag: ArrowDownIcon,
        link: "/pokedex",
        subMenu: [
            {
                name: "Generation I",
                icons: [
                    {
                        type: 'legendary',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png'
                    },
                    {
                        name: 'glass',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
                    },
                    {
                        type: 'fire',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
                    },
                    {
                        type: 'water',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
                    }
                ],
            },
            {
                name: "Generation II",
                icons: [
                    {
                        type: 'legendary',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png'
                    },
                    {
                        name: 'glass',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png'
                    },
                    {
                        type: 'fire',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png'
                    },
                    {
                        type: 'water',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png'
                    }
                ]
            },
            {
                name: "Generation III",
                icons: [
                    {
                        type: 'legendary',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png'
                    },
                    {
                        name: 'glass',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png'
                    },
                    {
                        type: 'fire',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png'
                    },
                    {
                        type: 'water',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png'
                    }
                ]
            },
            {
                name: "Generation IV",
                icons: [
                    {
                        type: 'legendary',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png'
                    },
                    {
                        name: 'glass',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png'
                    },
                    {
                        type: 'fire',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png'
                    },
                    {
                        type: 'water',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png'
                    }
                ]
            },
            {
                name: "Generation V",
                icons: [
                    {
                        type: 'legendary',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png'
                    },
                    {
                        name: 'glass',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png'
                    },
                    {
                        type: 'fire',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png'
                    },
                    {
                        type: 'water',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png'
                    }
                ]
            },
            {
                name: "Generation VI",
                icons: [
                    {
                        type: 'legendary',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png'
                    },
                    {
                        name: 'glass',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png'
                    },
                    {
                        type: 'fire',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png'
                    },
                    {
                        type: 'water',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png'
                    }
                ]
            },
            {
                name: "Generation VII",
                icons: [
                    {
                        type: 'legendary',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png'
                    },
                    {
                        name: 'glass',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png'
                    },
                    {
                        type: 'fire',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png'
                    },
                    {
                        type: 'water',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png'
                    }
                ]
            },
            {
                name: "Generation VIII",
                icons: [
                    {
                        type: 'legendary',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png'
                    },
                    {
                        name: 'glass',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png'
                    },
                    {
                        type: 'fire',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png'
                    },
                    {
                        type: 'water',
                        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png'
                    }
                ]
            },
        ]
    },
    {
        name: "About",
        icon: AboutIcon,
        link: "/about",
    }
];

const pokemonTypeUtils = {
    'normal': { 'logo': NormalLogo, 'color': { name: 'Normal', primary: 'rgba(145, 154, 162, 0.7)', secondary: 'rgba(145, 154, 162, 0.1)' }},
    'fighting': { 'logo': FightingLogo, 'color': { name: 'Fighting', primary: 'rgba(224, 48, 106, 0.7)', secondary: 'rgba(224, 48, 106, 0.1)' }},
    'flying': { 'logo': FlyingLogo, 'color': { name: 'Flying', primary: 'rgba(137, 170, 227, 0.7)', secondary: 'rgba(137, 170, 227, 0.1)' }},
    'poison': { 'logo': PoisonLogo, 'color': { name: 'Poison', primary: 'rgba(181, 103, 206, 0.7)', secondary: 'rgba(181, 103, 206, 0.1)' }},
    'ground': { 'logo': GroundLogo, 'color': { name: 'Ground', primary: 'rgba(232, 114, 54, 0.7)', secondary: 'rgba(232, 114, 54, 0.1)' }},
    'rock': { 'logo': RockLogo, 'color': { name: 'Rock', primary: 'rgba(200, 182, 134, 0.7)', secondary: 'rgba(200, 182, 134, 0.1)' }},
    'bug': { 'logo': BugLogo, 'color': { name: 'Bug', primary: 'rgba(131, 195, 0, 0.7)', secondary: 'rgba(131, 195, 0, 0.1)' }},
    'ghost': { 'logo': GhostLogo, 'color': { name: 'Ghost', primary: 'rgba(76, 106, 178, 0.7)', secondary: 'rgba(76, 106, 178, 0.1)' }},
    'steel': { 'logo': SteelLogo, 'color': { name: 'Steel', primary: 'rgba(90, 142, 162, 0.7)', secondary: 'rgba(90, 142, 162, 0.1)' }},
    'fire': { 'logo': FireLogo, 'color': { name: 'Fire', primary: 'rgba(255, 151, 65, 0.7)', secondary: 'rgba(255, 151, 65, 0.1)' }},
    'water': { 'logo': WaterLogo, 'color': { name: 'Water', primary: 'rgba(54, 146, 220, 0.7)', secondary: 'rgba(54, 146, 220, 0.1)' }},
    'grass': { 'logo': GrassLogo, 'color': { name: 'Grass', primary: 'rgb(56, 191, 75, 0.7)', secondary: 'rgba(58, 255, 86, 0.1)' }},
    'electric': { 'logo': ElectricLogo, 'color': { name: 'Electric', primary: 'rgb(220, 184, 2, 0.7)', secondary: 'rgba(251, 209, 0, 0.1)' }},
    'psychic': { 'logo': PsychicLogo, 'color': { name: 'Psychic', primary: 'rgba(255, 102, 117, 0.7)', secondary: 'rgba(255, 102, 117, 0.1)' }},
    'ice': { 'logo': IceLogo, 'color': { name: 'Ice', primary: 'rgba(76, 209, 192, 0.7)', secondary: 'rgba(76, 209, 192, 0.1)' }},
    'dragon': { 'logo': DragonLogo, 'color': { name: 'Dragon', primary: 'rgba(0, 111, 201, 0.7)', secondary: 'rgba(0, 111, 201, 0.1)' }},
    'dark': { 'logo': DarkLogo, 'color': { name: 'Dark', primary: 'rgba(255, 255, 255, 0.7)', secondary: 'rgba(255, 255, 255, 0.1)' }},
    'fairy': { 'logo': FairyLogo, 'color': { name: 'Fairy', primary: 'rgb(220, 119, 206, 0.7)', secondary: 'rgba(251, 137, 235, 0.1)' }}
};

const versions = [
    {
        "id": 0,
        "version": {
            "name": "red-blue",
            "url": "https://pokeapi.co/api/v2/version-group/1/",
            "generation": "generation-i",
            "generation_id": 1,
        }
    },
    {
        "id": 1,
        "version": {
            "name": "yellow",
            "url": "https://pokeapi.co/api/v2/version-group/2/",
            "generation": "generation-i",
            "generation_id": 1,
        }
    },
    {
        "id": 2,
        "version": {
            "name": "gold-silver",
            "url": "https://pokeapi.co/api/v2/version-group/3/",
            "generation": "generation-ii",
            "generation_id": 2,
        }
    },
    {
        "id": 3,
        "version": {
            "name": "crystal",
            "url": "https://pokeapi.co/api/v2/version-group/4/",
            "generation": "generation-ii",
            "generation_id": 2,
        }
    },
    {
        "id": 4,
        "version": {
            "name": "ruby-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/5/",
            "generation": "generation-iii",
            "generation_id": 3,
        }
    },
    {
        "id": 5,
        "version": {
            "name": "emerald",
            "url": "https://pokeapi.co/api/v2/version-group/6/",
            "generation": "generation-iii",
            "generation_id": 3,
        }
    },
    {
        "id": 6,
        "version": {
            "name": "firered-leafgreen",
            "url": "https://pokeapi.co/api/v2/version-group/7/",
            "generation": "generation-i",
            "generation_id": 1,
        }
    },
    {
        "id": 7,
        "version": {
            "name": "diamond-pearl",
            "url": "https://pokeapi.co/api/v2/version-group/8/",
            "generation": "generation-iv",
            "generation_id": 4,
        }
    },
    {
        "id": 8,
        "version": {
            "name": "platinum",
            "url": "https://pokeapi.co/api/v2/version-group/9/",
            "generation": "generation-iv",
            "generation_id": 4,
        }
    },
    {
        "id": 9,
        "version": {
            "name": "heartgold-soulsilver",
            "url": "https://pokeapi.co/api/v2/version-group/10/",
            "generation": "generation-ii",
            "generation_id": 2,
        }
    },
    {
        "id": 10,
        "version": {
            "name": "black-white",
            "url": "https://pokeapi.co/api/v2/version-group/11/",
            "generation": "generation-v",
            "generation_id": 5,
        }
    },
    {
        "id": 11,
        "version": {
            "name": "colosseum",
            "url": "https://pokeapi.co/api/v2/version-group/12/",
            "generation": "generation-v",
            "generation_id": 5,
        }
    },
    {
        "id": 12,
        "version": {
            "name": "xd",
            "url": "https://pokeapi.co/api/v2/version-group/13/",
            "generation": "generation-v",
            "generation_id": 5,
        }
    },
    {
        "id": 13,
        "version": {
            "name": "black-2-white-2",
            "url": "https://pokeapi.co/api/v2/version-group/14/",
            "generation": "generation-v",
            "generation_id": 5,
        }
    },
    {
        "id": 14,
        "version": {
            "name": "x-y",
            "url": "https://pokeapi.co/api/v2/version-group/15/",
            "generation": "generation-vi",
            "generation_id": 6,
        }
    },
    {
        "id": 15,
        "version": {
            "name": "omega-ruby-alpha-sapphire",
            "url": "https://pokeapi.co/api/v2/version-group/16/",
            "generation": "generation-iii",
            "generation_id": 3,
        }
    },
    {
        "id": 16,
        "version": {
            "name": "sun-moon",
            "url": "https://pokeapi.co/api/v2/version-group/17/",
            "generation": "generation-vii",
            "generation_id": 7,
        }
    },
    {
        "id": 17,
        "version": {
            "name": "ultra-sun-ultra-moon",
            "url": "https://pokeapi.co/api/v2/version-group/18/",
            "generation": "generation-vii",
            "generation_id": 7,
        }
    },
    {
        "id": 18,
        "version": {
            "name": "lets-go-pikachu-lets-go-eevee",
            "url": "https://pokeapi.co/api/v2/version-group/19/",
            "generation": "generation-vii",
            "generation_id": 7,
        }
    },
    {
        "id": 19,
        "version": {
            "name": "sword-shield",
            "url": "https://pokeapi.co/api/v2/version-group/20/",
            "generation": "generation-viii",
            "generation_id": 8,
        }
    }
];

const learnedMethods = [
    { name: 'level-up', src: lvlUpIcon },
    { name: 'machine', src: machineIcon },
    { name: 'egg', src: eggIcon },
];

const powerTypes = [
    { name: 'physical', src: physicalIcon },
    { name: 'special', src: specialIcon },
    { name: 'status', src: statusIcon },
];

const backgroundCardImages = [
    {img: ForestBKG, color: "#727a46"},
    {img: Grass1BKG, color: "#afb72a"},
    {img: Grass2BKG, color: "#72ab0a"},
    {img: Water1BKG, color: "#017e9b"},
    {img: Water2BKG, color: "#0945b2"},
    {img: Sky1BKG, color: "#9fc8ee"},
    {img: Sky2BKG, color: "#c18b99"},
    {img: Night1BKG, color: "#060604"},
    {img: Night2BKG, color: "#2f1957"},
    {img: Fire1BKG, color: "#c83402"},
    {img: Fire2BKG, color: "#c89202"},
    {img: WSXP, color: "#3a5415"},
];

export { toUpperCaseIndex, transformString, transformVerString, navMenu, learnedMethods, powerTypes, pokemonTypeUtils, versions, backgroundCardImages };