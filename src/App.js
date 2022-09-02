import '@/App.css'
import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppContext } from '@context/AppContext'
import { useAppInitialState } from '@hooks/useAppInitialState'
import { Layout } from '@containers/Layout/Layout'
import { LoadingPage } from '@pages/LoadingPage/LoadingPage'


const Characters = lazy(() => import('@pages/Characters/Characters'))
const NotFound = lazy(() => import('@pages/NotFound/NotFound'))
const About = lazy(() => import('@pages/About/About'))
const Home = lazy(() => import('@pages/Home/Home'))

function App() {
  const initialState = useAppInitialState()

  return (
    <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout theme={initialState.theme}>
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/pokedex" element={<Characters />} />
                <Route exact path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>   
          </Layout>
        </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
