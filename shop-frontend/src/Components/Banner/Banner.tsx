import React from 'react'
import './Banner.css'

export const Banner = () => {
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
            'https://firebasestorage.googleapis.com/v0/b/st-moriz.appspot.com/o/banner1.jpg?alt=media&token=f1734c5e-3240-4a66-a588-de82763b9941&_gl=1*14p3flz*_ga*MTUxNDA2MjkwOS4xNjc5ODYwNDM4*_ga_CW55HF8NVT*MTY4NjY0NzE3Ni4yMy4xLjE2ODY2NTEwMTcuMC4wLjA.'
          }
          alt="Изображение девушки на бежевом фоне"
        />
      </div>
    </div>
  )
}
