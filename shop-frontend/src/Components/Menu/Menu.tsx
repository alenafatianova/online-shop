import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <div className="menu_wrapper">
      <div className="icons-container">
        <SearchOutlined className="search-icon" color="red" />
        <NavLink to='/account' >
          <UserOutlined className="user-icon" />
        </NavLink>
        <HeartOutlined className="wishlist-icon" />
          <NavLink to={'/cart'}>
        <ShoppingOutlined className="cart-icon" />
        </NavLink>
      </div>
    </div>
  )
}
