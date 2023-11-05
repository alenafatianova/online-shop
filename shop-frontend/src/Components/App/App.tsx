import React, { useState } from 'react'
import './App.css'
import { MainPage } from '../MainPage/MainPage'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { HowToUsePage } from '../HowToUsePage/HowToUsePage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { DeliveryPage } from '../DeliveryPage/DeliveryPage'
import { UserAccount } from '../UserAccount/UserAccount'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart'
import { Auth } from '../Auth/Auth'
import { PrivateRoutes } from '../Auth/helper'
import { FirebaseApp } from 'firebase/app'

interface IFirebaseApp {
  firebaseApp: FirebaseApp
}

const App: React.FC<IFirebaseApp> = ({ firebaseApp }) => {
  const [isLogIn, setIsLogIn] = useState(false)
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Header isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
      <Routes>
        <Route path="/how" element={<HowToUsePage />} />
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/delivery'} element={<DeliveryPage />} />
        <Route
          path={'/account'}
          element={
            <PrivateRoutes isAuth={isLogIn}>
              <UserAccount />
            </PrivateRoutes>
          }
        />
        <Route
          path={'/cart'}
          element={
            <PrivateRoutes isAuth={isLogIn}>
              <ShoppingCart />
            </PrivateRoutes>
          }
        />

        <Route path="/auth" element={<Auth firebaseApp={firebaseApp} />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
