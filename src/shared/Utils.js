
const toUpperCaseIndex = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const transformString = (text) => {
    return text.replace(/(\r\n|\n|\r|\f)/gm, " ");
}

const navMenu = [
    {
        name: "Home",
        link: "/"
    }, 
    {
    name: "Pokedex",
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
                    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png'
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
    ]},
];

export {toUpperCaseIndex, transformString, navMenu};