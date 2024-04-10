import React, { useEffect, useState, useCallback } from 'react'
import './InstagramSection.css'
import { Button } from '../../../Button/Button'
import { ImagesType } from '../../../types'
import { getInstagramPhotos } from '../../../../api'

export const InstagramSection = () => {
  const [instagramUsers, setInstagramUsers] = useState<ImagesType[]>([])

  const onSignupClick = () => {
    window.open('https://www.instagram.com/stmoriz/', '_blank', 'noopener, noreferrer')
  }

  const handleData = async () => {
    const instagramUsersPhotos = await getInstagramPhotos()
    setInstagramUsers(instagramUsersPhotos)
  }

  useEffect(() => {
    handleData()
  }, [])

  return (
    <section className="instagram-section" aria-label="Раздел с фотографиями из Инстаграма бренда">
      <div className="instagram-section-container" tabIndex={0}>
        <div className="section-title">
          <span className="title-text">Еще больше пользы - </span>
          <span className="instagram-text">В нашем instagram</span>
        </div>
        <div className="signup-instagram">
          <Button title="Подписаться" className="signup-button" onClick={onSignupClick}></Button>
        </div>
      </div>
      <div className="instagram-gallery">
        {instagramUsers.map((image) => (
          <div className="instagram-gallery-photos" key={image.id}>
            <img src={image.image} alt={image.description} />
          </div>
        ))}
      </div>
    </section>
  )
}
