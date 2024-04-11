import React from 'react'
import './CatalogueSection.css'
import { Button } from '../../../Button/Button'

export const CatalogueSection = () => {
  return (
    <section className="catalogue-section">
      <div className="catalogue-section-container">
        <div className="mist-container">
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/st-moriz.appspot.com/o/mist.png?alt=media&token=c84675d0-f10a-44b4-b2c4-4a7b3a9bc404&_gl=1*9pajhn*_ga*MTUxNDA2MjkwOS4xNjc5ODYwNDM4*_ga_CW55HF8NVT*MTY4NjU5ODc4NC4yMS4xLjE2ODY2MDEwOTMuMC4wLjA.'
            }
            alt="Фотография спрея-автозагара"
            className="mist-image"
          />
        </div>
        <div className="mousse-container">
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/st-moriz.appspot.com/o/mousse.png?alt=media&token=ff0a6f82-f714-4761-9612-3d451da13328&_gl=1*dr4rn5*_ga*MTUxNDA2MjkwOS4xNjc5ODYwNDM4*_ga_CW55HF8NVT*MTY4NjU5ODc4NC4yMS4xLjE2ODY2MDEyNjcuMC4wLjA.'
            }
            alt="Мусс для загара"
            className="mousse-image"
          />
        </div>

        <div className="description">
          <h3>Безопасный загар и идеальный результат</h3>
          <p>Запатенованная формула с увлажняющими компонентами, </p>
          <p>позволяющая получать профессиональное качество загара</p>
          <p>и ухаживать за Вашей кожей</p>

          <div className="button-component">
            <Button title="Каталог" />
          </div>
        </div>
      </div>
    </section>
  )
}
