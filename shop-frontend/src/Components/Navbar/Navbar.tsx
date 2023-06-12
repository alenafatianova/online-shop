import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.svg'
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { SpinningText } from './SpinningText/SpinningText';

export const Navbar: React.FC = () => {
  return (
    <>
        <div className={'navbar-container'}>
            <div className='menu-list'>
               <NavLink to={'#'}> <span>Каталог</span></NavLink>
                <span>Доставка и оплата</span>
                <span>Как пользоваться</span>
            </div>
            <SpinningText />
            <div className='icons-container'>
                <SearchOutlined className='search-icon' color='red'/>
                <UserOutlined className='user-icon' />
                <HeartOutlined className='wishlist-icon' />
                <ShoppingOutlined className='cart-icon' />
            </div>
        </div>
    </>
  )
}
