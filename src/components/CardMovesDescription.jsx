import React from 'react';
import { motion } from 'framer-motion';
import { toUpperCaseIndex } from '../shared/Utils';

const CardMovesDescription = ({tabTitle}) => {
    return (
        <React.Fragment>
            <motion.h1 className="CharacterCard-Description-Title">{toUpperCaseIndex(tabTitle)}</motion.h1>
            

        </React.Fragment>
    );
};

export default CardMovesDescription;