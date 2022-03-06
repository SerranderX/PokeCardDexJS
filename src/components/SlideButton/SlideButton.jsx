import React from 'react';
import { motion } from 'framer-motion';

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

const SlideButton = ({state, handler, label}) => {
    const toggleSwitch = () => handler(!state);

    return (
        <React.Fragment>
            <p style={{ marginLeft: "20px", marginRight: "2px", marginTop: "0px", marginBottom: "0px" }}>{label}</p>
            <div className="switch" data-on={state} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
            </div>
        </React.Fragment>
    );
};

export { SlideButton };