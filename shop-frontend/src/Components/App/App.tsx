import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router';
import { MainPage } from '../MainPage/MainPage';
import { NewProducts } from '../Bestsellers/Bestsellers';


function App() {
  return (
    <>
     <Navbar/>
      <MainPage />
      <NewProducts/>
    </>
  );
}

export default App;
