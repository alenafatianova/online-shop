import React, { useState } from 'react'
import './App.css'
import { MainPage } from '../Pages/MainPage/MainPage'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { HowToUsePage } from '../Pages/HowToUsePage/HowToUsePage'
import { Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { DeliveryPage } from '../Pages/DeliveryPage/DeliveryPage'
import { UserAccount } from '../UserAccount/UserAccount'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart'
import { Auth } from '../Auth/Auth'
import { PrivateRoutes } from '../Auth/helper'
import { FirebaseApp } from 'firebase/app'
import { CataloguePage } from '../Pages/CataloguePage/CataloguePage'
import { ProductPage } from '../Pages/ProductPage/ProductPage'

interface IFirebaseApp {
  firebaseApp: FirebaseApp
}

const App: React.FC<IFirebaseApp> = ({ firebaseApp }) => {
  const [isLogIn, setIsLogIn] = useState(false)
  const { id }  = useParams() 

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
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path={'/product/:id'} element={<ProductPageWrapper />} 
        />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

const ProductPageWrapper: React.FC = () => {
  const { id } = useParams() // Extract the id from the URL params
  return <ProductPage id={id} /> // Pass the id as a prop to ProductPage
}

export default App
