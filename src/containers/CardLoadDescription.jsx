import React from 'react';
import { motion } from 'framer-motion';
import '../styles/DescriptionLoading.css';

const CardLoadDescription = ({logoType}) => {
    return (
        <motion.div className="Loading-Container">
            <motion.img className="Loading-Logo" 
                        src={logoType} 
                        animate={{ rotate: 360, scale: [1, 1.3, 1] }} 
                        transition={{ duration: 3, repeat: Infinity }}/>
            <h2>Cargando...</h2>
        </motion.div>
    );
};

export default CardLoadDescription;