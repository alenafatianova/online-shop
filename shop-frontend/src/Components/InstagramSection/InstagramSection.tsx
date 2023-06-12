import React from 'react'
import './InstagramSection.css'
import { Button } from '../Button/Button'

export const InstagramSection = () => {
  return (
    <section className="instagram-section" aria-label="Раздел с фотографиями из Инстаграма бренда">
      <div className="instagram-section-container" tabIndex={0}>
        <div className="section-title">
          <span className="title-text">Еще больше пользы - </span>
          <span className="instagram-text">В нашем instagram</span>
        </div>
        <div className="signup-instagram">
          <Button title="Подписаться" className="signup-button" />
        </div>
      </div>
      <div className="instagram-gallery">
        <img
          src={
            'https://firebasestorage.googleapis.com/v0/b/st-moriz.appspot.com/o/peel_user.jpg?alt=media&token=bcdb51e4-9210-4dd8-ab96-dc3cc6d27a3e&_gl=1*ngqxq3*_ga*MTUxNDA2MjkwOS4xNjc5ODYwNDM4*_ga_CW55HF8NVT*MTY4NjU5ODc4NC4yMS4xLjE2ODY2MDI3MTcuMC4wLjA.'
          }
          alt="Фото из социальной сети Instagram"
        />
        <img
          src={
            'https://firebasestorage.googleapis.com/v0/b/st-moriz.appspot.com/o/serum_dry_skin_user.jpg?alt=media&token=be24d744-902a-4dd7-aeb0-b800d1a666db&_gl=1*qzvuqk*_ga*MTUxNDA2MjkwOS4xNjc5ODYwNDM4*_ga_CW55HF8NVT*MTY4NjU5ODc4NC4yMS4xLjE2ODY2MDI3NTEuMC4wLjA.'
          }
          alt="Фото из социальной сети Instagram"
        />
        <img
          src={
            'https://firebasestorage.googleapis.com/v0/b/st-moriz.appspot.com/o/tanning_serum_user.jpg?alt=media&token=2a399a57-9c0e-4017-9346-938cbfc1e426&_gl=1*j9mpih*_ga*MTUxNDA2MjkwOS4xNjc5ODYwNDM4*_ga_CW55HF8NVT*MTY4NjU5ODc4NC4yMS4xLjE2ODY2MDI3OTMuMC4wLjA.'
          }
          alt="Фото из социальной сети Instagram"
        />
        <img
          src={
            'https://firebasestorage.googleapis.com/v0/b/st-moriz.appspot.com/o/foaming_water_user.webp?alt=media&token=2b27165b-b958-4c5e-be4d-5f455e075623&_gl=1*1ide11w*_ga*MTUxNDA2MjkwOS4xNjc5ODYwNDM4*_ga_CW55HF8NVT*MTY4NjU5ODc4NC4yMS4xLjE2ODY2MDI4MjIuMC4wLjA.'
          }
          alt="Фото из социальной сети Instagram"
        />
      </div>
    </section>
  )
}
