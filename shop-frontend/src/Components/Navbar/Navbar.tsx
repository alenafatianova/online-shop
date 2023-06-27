import React from 'react'
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <React.Fragment>
      <div className={'navbar-container'}>
        <div className="menu-list">
          <NavLink to={'/catalogue'}>Каталог</NavLink>
          <span>Доставка и оплата</span>
          <NavLink to={'/howto'}>Как пользоваться</NavLink>
        </div>
      </div>
    </React.Fragment>
  )
}
