import React from 'react';

const Header = ({ darkMode, setDarkMode, getGeneracion, logoGeneracion, setGeneracion }) => {

    const toggleButton = (generation) => getGeneracion(generation);

    return (
        <div className='Header' >
            <h1>{logoGeneracion}</h1>
            
            <button className="Header-Button Generation" onClick={() => toggleButton(1)}>Generation I</button>
            <button className="Header-Button Generation" onClick={() => toggleButton(2)}>Generation II</button>
            <button className="Header-Button Generation" onClick={() => toggleButton(3)}>Generation III</button>
            <button className="Header-Button Generation" onClick={() => toggleButton(4)}>Generation IV</button>
            <button className="Header-Button Generation" onClick={() => toggleButton(5)}>Generation V</button>
            <button className="Header-Button Generation" onClick={() => toggleButton(6)}>Generation VI</button>
            <button className="Header-Button Generation" onClick={() => toggleButton(7)}>Generation VII</button>
            <button className="Header-Button Generation" onClick={() => toggleButton(8)}>Generation VIII</button>

            <button className="Header-Button DarkMode" type="button" onClick={() => setDarkMode(!darkMode) }>Dark Mode</button>

        </div>
    );
};

export default Header;