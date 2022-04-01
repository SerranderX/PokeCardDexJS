import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import "./NotFound.css";

const NotFound = () => {

    const {pokedexPage, setPokedexPage} = useContext(AppContext);

    if(pokedexPage) { setPokedexPage(false) }

    return (
        <div className="NotFound-container" >
            <h1>Error 404 - Not Found</h1>
        </div>
    );
};

export { NotFound };