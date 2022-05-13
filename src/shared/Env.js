import React from 'react';

const ENV = {
  developerData: {
    signature: '{ Powered by SerranderX }',
    name: 'SerranderX',
    gitHub:  String(process.env.GITHUB),
    linkedin: String(process.env.LINKEDIN),
    twitter: String(process.env.TWITTER),
    facebook: String(process.env.FACEBOOK),
    email: String(process.env.EMAIL),
  },
  pokeApiURL: String(process.env.POKEAPI),
  pokeApiURLPage: String(process.env.POKEAPI_PAGE),
  pokemonShowdown: String(process.env.POKEMONSHOWDOWN),
  domain: String(process.env.DOMAIN),
}

export { ENV }
