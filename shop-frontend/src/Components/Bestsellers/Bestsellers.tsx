import React, { useEffect, useState } from 'react'
import './Bestsellers.css'
import { BestellersType } from '../types'
import { getBestsellers } from '../../api'

export const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState<BestellersType[]>([])

  useEffect(() => {
    (async () => {
      const bestsellers = await getBestsellers()
      setBestsellers(bestsellers)
    })()
  }, [])

  return (
    <div className='bestsellers'>
        <div className="bestsellers-section-title">
            <span className='popular-items-title'>Популярные товары</span>
            <span className='bestsellers-title-span'>Бестселлеры</span>
        </div>
        {bestsellers.map((product) => {
              return (
                <div key={product.id} className='bestsellers-gallery'>
                  <div className='bestseler-product-img'><img src={product.image} alt="Фотография продукта" /></div>
                  <div className='bestseller-product-title-container'><span className='bestseller-product-title'>{product.title}</span></div>
                  <div className='bestseller-product-price'><span>{product.price}</span></div>
                </div>
              )
            })}
    </div>
  )
}
