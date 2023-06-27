import React from 'react'
import './Header.css'
import { Navbar } from '../Navbar/Navbar'
import { SpinningLogo } from '../Logo/SpinningLogo'
import { Menu } from '../Menu/Menu'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container" tabIndex={0}>
        <Navbar />
        <NavLink to={'/'} className={'logo-image-link'}>
          <SpinningLogo />
        </NavLink>
        <Menu />
      </div>
    </header>
  )
}
