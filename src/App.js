import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import { usePokemonsData } from './hooks/usePokemonsData';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const {characters, getGeneration, generacion, loading, error, offSet, versions} = usePokemonsData();

  return (
    <div className={`App ${darkMode && 'Dark-mode'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} getGeneracion={getGeneration} generacion={generacion}/>
      {loading && <p>Loading...</p>}
      {!loading && !error && <Characters offSet={offSet} darkMode={darkMode} characters={characters} versions={versions} />}

    </div>
  );
}

export default App;
