import React from 'react'
import './CataloguePage.css'
import banner from '../../../assets/Banner_texture.png'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'
import { cataloguePageProducts } from './utils'

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
    <div className="catalogue_wrapper">
      <div className="catalogue_banner">
        <img src={banner} className="banner_texture" alt="Choose the texture" />
        <p className="banner-text_first-row">Выберите текстуру,</p>
        <p className="banner-text_first-row">подходящую именно Вам</p>
        <p className="banner-text_second-row">Подходят для лица и тела</p>
      </div>
      <Breadcrumb className="breadcrumbs" items={breadcrumbsItems} />
      <h1 className="catalogue-header">Каталог</h1>
      <div className="catalogue_filter-buttons">
        <button className="">Все</button>
        <button className="">Муссы</button>
        <button className="">Лосьоны</button>
        <button className="">Спреи</button>
        <button className="">Аксессуары</button>
        <button className="">Косметика</button>
      </div>
     
        <div className="catalogue_products-rows">
          {cataloguePageProducts.map((product) => (
            <div key={product.id} className='products-rows'>
              <img src={product.image} alt="Продукт для загара" />
              <p className="product_name">{product.title}</p>
              <p className="product_volume">{product.volume}</p>
              <p className="product_price">{product.price}</p>
            </div>
          ))}
        </div>
  
    </div>
  )
}
