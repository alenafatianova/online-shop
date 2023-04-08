import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router';
import { MainPage } from '../MainPage/MainPage';


function App() {
  return (
    <>
     <Navbar/>
      <MainPage />
    </>
  );
}

export default App;
