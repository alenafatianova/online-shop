import React from 'react'
import './CataloguePage.css'
import banner from '../../../assets/Banner_texture.png'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'

export const CataloguePage = () => {
    
    const breadcrumbsItems = [
        {
          title: <NavLink to="/">Главная</NavLink>,
        },
        {
          title: <NavLink to="/catalogue">Каталог</NavLink>,
        },
    ]

  return (
    <div className='catalogue_wrapper'>
        <div className='catalogue_banner'>
            <img src={banner} className='banner_texture' alt="Choose the texture" />
            <p className='banner-text_first-row'>Выберите текстуру,</p>
            <p className='banner-text_first-row'>подходящую именно Вам</p>
            <p className='banner-text_second-row'>Подходят для лица и тела</p>
        </div>
       <Breadcrumb className='breadcrumbs' items={breadcrumbsItems} />
    </div>
  )
}
