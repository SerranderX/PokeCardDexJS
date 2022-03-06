import React from 'react';
import { motion } from 'framer-motion';
import { toUpperCaseIndex } from '../../shared/Utils';
import CardDataNotFound from '../CardDataNotFound/CardDataNotFound';

const CardLocationsDescription = ({tabTitle, tabDescriptionData, selectedTab, pokemonData}) => {
    console.log(tabTitle);

    return (
        <React.Fragment>
            <motion.h1 className="CharacterCard-Description-Title">{toUpperCaseIndex(tabTitle)}</motion.h1>
            {tabDescriptionData.location.length > 0 && (
                <React.Fragment>
                    <p>asasdasd</p>
                    <select className='Versions-Select'>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </React.Fragment>
            )}
            {tabDescriptionData.location.length === 0 && (
                <CardDataNotFound />
            )}
        </React.Fragment>
    );
};

export default CardLocationsDescription;