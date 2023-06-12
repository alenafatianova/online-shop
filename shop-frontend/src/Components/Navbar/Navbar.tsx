import React from 'react'
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <>
      <div className={'navbar-container'}>
        <div className="menu-list">
          <NavLink to={'#'}>Каталог</NavLink>
          <span>Доставка и оплата</span>
          <span>Как пользоваться</span>
        </div>
      </div>
    </>
  )
}
