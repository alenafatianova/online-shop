import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <React.Fragment>
      <div className={'navbar-container'}>
        <div className="menu-list">
          <NavLink to={'/catalogue'}>Каталог</NavLink>
          <NavLink to={'/delivery'}>Доставка и оплата</NavLink>
          <NavLink to={'/how'}>Как пользоваться</NavLink>
        </div>
      </div>
    </React.Fragment>
  )
}
