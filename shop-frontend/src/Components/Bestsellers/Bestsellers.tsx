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
        <div className="bestsellers-title">
            <span className='popular-items-title'>Популярные товары</span>
            <span className='bestsellers-title-span'>Бестселлеры</span>
            {bestsellers.map((product) => {
              return (
                <div key={product.id}>{product.title}</div>
              )
            })}
        </div>
    </div>
  )
}
