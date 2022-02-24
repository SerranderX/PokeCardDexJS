import './App.css';
import React from 'react';
import Header from './containers/Header/Header';
import Characters from './containers/Characters/Characters';
import { Footer } from './containers/Footer/Footer';
import Loading from './components/Loading/Loading';
import { usePokemonsData } from './hooks/usePokemonsData';
import { AppContext } from './context/AppContext';
import { useAppInitialState } from './hooks/useAppInitialState'; 

function App() {
  const {characters, getGeneration, generacion, loading, error, offSet, versions} = usePokemonsData();
  const initialState = useAppInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <div className={`App`} data-theme={initialState.theme}>
        <Header getGeneracion={getGeneration} generacion={generacion}/>
        {loading && <Loading/>}
        {!loading && !error && <Characters offSet={offSet} characters={characters} versions={versions} />}
        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
