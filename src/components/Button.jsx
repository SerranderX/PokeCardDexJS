import React from 'react';

const Button = ({children, toggle, classType}) => {

    return (
        <button className={classType} onClick={toggle}>{ children }</button>
    );
};

export default Button;