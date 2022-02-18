import React from 'react';
import { motion } from 'framer-motion';
import { toUpperCaseIndex } from '../shared/Utils';
import CardDataNotFound from './CardDataNotFound';

const CardLocationsDescription = ({tabTitle, tabDescriptionData, selectedTab, pokemonData}) => {
    return (
        <React.Fragment>
            <motion.h1 className="CharacterCard-Description-Title">{toUpperCaseIndex(tabTitle)}</motion.h1>
            {tabDescriptionData.location.length > 0 && (
                <p>asasdasd</p>
            )}
            {tabDescriptionData.location.length === 0 && (
                <CardDataNotFound />
            )}
        </React.Fragment>
    );
};

export default CardLocationsDescription;