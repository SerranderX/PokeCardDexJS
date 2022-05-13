import React from 'react';
import { Helmet } from 'react-helmet'
import { ENV } from '@shared/Env';
import { languageData } from '@shared/language'

const HelmetSection = ({sectionName}) => {
    return (
        <Helmet>
        <title>{` PokeCardDexJS - ${sectionName} `}</title>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content={`@${ENV.developerData.name}`}/>
        <meta name="twitter:creator" content={`@${ENV.developerData.name}`}/>
        <meta name="twitter:title" content={languageData.appTitle}/>
        <meta name="twitter:description" content={languageData.appTitle}/>
        <meta
            name="twitter:image"
            content="https://res.cloudinary.com/pokecarddexjs-com/image/upload/v1650743750/Screenshot_15_asin6n.png"
        />
        <meta property="og:title" content={languageData.appTitle}/>
        <meta property="og:description" content={languageData.appTitle}/>
        <meta
            property="og:image"
            content="https://res.cloudinary.com/pokecarddexjs-com/image/upload/v1650743750/Screenshot_15_asin6n.png"
        />
        <meta property="og:url" content={languageData.domain} />
        <meta property="og:site_name" content={languageData.appTitle} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
    );
};

export { HelmetSection };