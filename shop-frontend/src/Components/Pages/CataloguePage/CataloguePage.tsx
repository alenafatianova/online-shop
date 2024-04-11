import React, { useState } from 'react'
import './CataloguePage.css'
import banner from '../../../assets/Banner_texture.png'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'
import { cataloguePageProducts } from './utils'

export const CataloguePage = () => {
  const [filteredProducts, setFilteredProducts] = useState(cataloguePageProducts)
  const [selectedTag, setSelectedTag] = useState('')

  const breadcrumbsItems = [
    {
      title: <NavLink to="/">Главная</NavLink>,
    },
    {
      title: <NavLink to="/catalogue">Каталог</NavLink>,
    },
  ]

  const productsFilterHandler = (tag: string) => {
    setSelectedTag(tag)
    const productsByTag = cataloguePageProducts.filter((product) => product.tag?.includes(tag))
    setFilteredProducts(productsByTag)
  }

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
        <button onClick={() => productsFilterHandler('')}>Все</button>
        <button onClick={() => productsFilterHandler('mousse')}>Муссы</button>
        <button onClick={() => productsFilterHandler('lotion')}>Лосьоны</button>
        <button onClick={() => productsFilterHandler('spray')}>Спреи</button>
        <button onClick={() => productsFilterHandler('accessories')}>Аксессуары</button>
        <button onClick={() => productsFilterHandler('cosmetics')}>Косметика</button>
      </div>

      <div className="catalogue_products-rows">
        {filteredProducts.map((product) => (
          <div key={product.id} className="products-rows">
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
