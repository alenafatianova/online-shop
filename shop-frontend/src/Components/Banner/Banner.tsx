import React, { useEffect, useState } from 'react'
import './Banner.css'
import { storage } from '../../api'
// import { getBanner } from '../../api'

export const Banner = () => {
  const [bannerImage, setBannerImage] = useState('')

  useEffect(() => {
    console.log(storage)
  }, [])

  return (
    <div className="banner">
      <div className="banner-text-container">
        <span className="banner-text">Бесплатная доставка при заказе 4-х средств</span>
        <span className="banner-text-second-line">*при покупке 2-х средств гель-молочко в подарок</span>
      </div>
      <div className="image-container">
        <img
          className="banner-image"
          src={
            'https://firebasestorage.googleapis.com/v0/b/st-moriz.appspot.com/o/banner%2Fbanner1.jpg?alt=media&token=34237bda-795a-42f8-b215-8a711fed13ff'
          }
          alt="Изображение девушки на бежевом фоне"
        />
      </div>
    </div>
  )
}
