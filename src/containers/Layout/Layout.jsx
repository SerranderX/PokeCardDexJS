import React from 'react'
import { Header } from '@containers/Header/Header'
import { Footer } from '@containers/Footer/Footer'
import { Toaster } from 'react-hot-toast';
import '@/App.css'

const Layout = ({ children, theme }) => {
  return (
    <div className={`App`} data-theme={theme}>
      <Toaster />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { Layout }
