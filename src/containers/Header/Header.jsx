import React from 'react';
import { AppContext } from '../../context/AppContext';
import Button from '../../components/Button';
import './Header.css';

const Header = ({ getGeneracion, logoGeneracion, setGeneracion }) => {

    const toggleButton = (generation) => getGeneracion(generation);
    const { toggleTheme } = React.useContext(AppContext);

    return (
        <div className='Header'>
            <h1>PokeCardDexJS</h1>
            <nav className='Header-navigator'>
                <Button classType={`Header-Button`} toggle={() => toggleButton(1)}>Generation I</Button>
                <Button classType={`Header-Button`} toggle={() => toggleButton(2)}>Generation II</Button>
                <Button classType={`Header-Button`} toggle={() => toggleButton(3)}>Generation III</Button>
                <Button classType={`Header-Button`} toggle={() => toggleButton(4)}>Generation IV</Button>
                <Button classType={`Header-Button`} toggle={() => toggleButton(5)}>Generation V</Button>
                <Button classType={`Header-Button`} toggle={() => toggleButton(6)}>Generation VI</Button>
                <Button classType={`Header-Button`} toggle={() => toggleButton(7)}>Generation VII</Button>
                <Button classType={`Header-Button`} toggle={() => toggleButton(8)}>Generation VIII</Button>

                <Button classType={`Header-Button`} toggle={() => toggleTheme() }>Dark Mode</Button>
            </nav>

        </div>
    );
};

export default Header;