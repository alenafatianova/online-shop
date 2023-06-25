import React from 'react'
import './Products.css'
import { ProductType } from '../types'
 
interface ProductsType {
  products: ProductType[]
  shortDescription: string | null
  header: string | null
}

export const Products: React.FC<ProductsType> = ({ products, shortDescription, header }) => {
  return (
    <div className='bestsellers'>
        <div className="bestsellers-section-title">
            <span className='popular-items-title'>{shortDescription}</span>
            <span className='bestsellers-title-span'>{header}</span>
        </div>
      
        {products.map((product) => {
              return (
                <div key={product.id} className='bestsellers-gallery'>
                <div className='bestseler-product-img'><img src={product.image} alt="Фотография продукта" /></div>
                <div className='bestseller-product-title-container'><span className='bestseller-product-title'>{product.title}</span></div>
                <div><span>{product.volume}</span></div>
                <div className='bestseller-product-price'><span>{product.price}</span></div>
        </div>
              )
            })}
    </div>
  )
}
