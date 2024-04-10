import React from 'react'
import './Header.css'
import { Navbar } from '../Navbar/Navbar'
import { SpinningLogo } from '../Logo/SpinningLogo'
import { Menu } from '../Menu/Menu'
import { NavLink } from 'react-router-dom'
import { StaticLogo } from '../Logo/StaticLogo'

type HeaderType = {
  isLogIn: boolean
  setIsLogIn: (isLogIn: boolean) => void
}

export const Header: React.FC<HeaderType> = () => {
  return (
    <header className="header">
      <div className="header-container" tabIndex={0}>
        <Navbar />
        <NavLink to={'/'} className={'logo-image-link'}>
          <StaticLogo />
        </NavLink>
        <Menu />
      </div>
    </header>
  )
}
