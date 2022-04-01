import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import '../../App.css';


const Layout = ({ children, theme }) => {
    return (
        <div className={`App`} data-theme={theme} >
            <Header />
                {children}
            <Footer />
        </div>
    );
};

export { Layout };