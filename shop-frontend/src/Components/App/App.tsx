import React from 'react'
import './App.css'
import { MainPage } from '../MainPage/MainPage'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { HowToUsePage } from '../HowToUsePage/HowToUsePage'
import { NavLink, Route, Routes } from 'react-router-dom'
import { DeliveryPage } from '../DeliveryPage/DeliveryPage'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/howto" element={<HowToUsePage />} />
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/delivery'} element={<DeliveryPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
