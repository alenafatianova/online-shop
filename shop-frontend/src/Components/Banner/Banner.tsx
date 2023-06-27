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
          src={'gs://st-moriz.appspot.com/banner1.jpg'}
          alt="Изображение девушки на бежевом фоне"
        />
      </div>
    </div>
  )
}
