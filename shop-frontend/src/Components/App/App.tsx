import React from 'react'
import './App.css'
import { MainPage } from '../MainPage/MainPage'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { HowToUsePage } from '../HowToUsePage/HowToUsePage'
import { Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/howto" element={<HowToUsePage />} />
        <Route path={'/'} element={<MainPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
