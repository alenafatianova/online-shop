import React, { useEffect, useState } from 'react'
import './InstagramSection.css'
import { Button } from '../Button/Button'

export const InstagramSection = () => {

  const [instagramUsers, setInstagramUsers] = useState<string[]>([])

  // get instagram images 
  // useEffect(() => {
  //   (async () => {
  //     const instagramUsersPhotos = await getInstagramPhotos()
  //     setInstagramUsers(instagramUsersPhotos)
  //   })
 
  // }, [])

  const onSignupClick = () => {
    window.open('https://www.instagram.com/stmoriz/', '_blank', 'noopener, noreferrer')
  }

 

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
     
      </div>
    </section>
  )
}
