import React from 'react'
import './App.css'
import { MainPage } from '../MainPage/MainPage'
import { NewProducts } from '../NewProducts/NewProducts'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  )
}

export default App
