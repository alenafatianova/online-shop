import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import React from 'react'
import './Menu.css'

export const Menu = () => {
  return (
    <div className="menu_wrapper">
      <div className="icons-container">
        <SearchOutlined className="search-icon" color="red" />
        <UserOutlined className="user-icon" />
        <HeartOutlined className="wishlist-icon" />
        <ShoppingOutlined className="cart-icon" />
      </div>
    </div>
  )
}
