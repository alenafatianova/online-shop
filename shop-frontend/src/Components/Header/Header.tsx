import React from 'react'
import './Header.css'
import { Navbar } from '../Navbar/Navbar'
import { SpinningLogo } from '../Logo/SpinningLogo'
import { Menu } from '../Menu/Menu'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container" tabIndex={0}>
        <Navbar />
        <SpinningLogo />
        <Menu />
      </div>
    </header>
  )
}
