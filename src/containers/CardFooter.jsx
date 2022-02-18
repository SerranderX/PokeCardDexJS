import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CardFooter.css';
import { SlideButton } from '../components/SlideButton';


const CardFooter = ({ setShinny, shinny, setFamale, famale, infoShared }) => {

    const { hasFamaleData } = infoShared;

    return (
        <motion.div 
            className="CharacterCard-Footer"
            animate={{ opacity: [0,1], y: [10, 0], transition: { duration: .8 }, delay: 0.8 }}
        >
            <SlideButton state={shinny} handler={setShinny} label={"Shinny"} />
            {hasFamaleData && (<SlideButton state={famale} handler={setFamale} label={"Female"} />) }
        </motion.div>
    );
};

export { CardFooter };