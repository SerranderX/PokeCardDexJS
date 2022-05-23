import React from 'react';

const en = {
    appTitle: 'PokeCardDexJS',
    appPresentationTitle: '¡Welcome to PokeCardDexJS!',
    appPresentation: 'A simple and fast pokedex inspired by the Pokemon Trading Card Game.',
    appDescription: 'In this page you can find every pokemon in all generations, and their information and artworks. You can also search for a pokemon by name or by number.',
    about: {
        titlePage: 'About Site',
        titleAuthor: 'About Author',
        descriptionPage: (PokeAPI, Pokemonshowdown) => <>PokeCardDexJS is a proyect made with educational porpouses inspired by the Pokemon Trading Card Game (TCG) and Video Games (VGC) with the idea of making a Pokedex with all Pokemon related information.
        The project was made with the help of the {PokeAPI}, a REST API that provides information about all Pokemon abilities, moves and other interesting data. Additionaly, the external repository {Pokemonshowdown} was utilized to add sound to every Pokémon present to date.
        This website was designed with ReactJS developer framework, and animation tools such as Framer Motion with the use of CSS/SASS for styles. Additionally, WebPack was utilized as the web's packaging for display and access pourpouses.</>,
        descriptionAuthor: `My name is Felipe Diaz, originary from Chile, latinamerican country. Developer by work and as a hobbie since almost 5 years ago while I was undergoing my universitary studies. This is my first formal proyect, made exclusively by me, using ReactJS Freamework (which i'm still learning to use), from which i've learned plenty. I hope this site to be of your liking as much as it was for me to design it. Deep inside i'm still a big Pokemon fan and as a software developer it was an interesting challenge on which I poured all previous knowledge learned from a Frontend developer's point of view.`,
    },
}

const languageData = en

export { languageData }