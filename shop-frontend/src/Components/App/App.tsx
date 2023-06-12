import React from 'react'
import './App.css'
import { MainPage } from '../MainPage/MainPage'
import { NewProducts } from '../Bestsellers/Bestsellers'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <NewProducts />
      <Footer />
    </>
  )
}

export default App
