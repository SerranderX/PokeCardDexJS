import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import { useAppInitialState } from './hooks/useAppInitialState'; 
import { Characters } from './pages/Characters/Characters';
import { NotFound } from './pages/NotFound/NotFound';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Layout } from './containers/Layout/Layout';

function App() {
  const initialState = useAppInitialState();

  return (
    <AppContext.Provider value={initialState} >
      <BrowserRouter>
        <Layout theme={initialState.theme}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pokedex" element={<Characters />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
