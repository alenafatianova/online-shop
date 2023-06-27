import React, { useEffect, useState } from 'react'
import './Banner.css'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

export const Banner = () => {
  const [bannerImage, setBannerImage] = useState('')

  useEffect(() => {
    const getBannerImage = async (): Promise<any> => {
      const storage = getStorage()
      const bannerRef = ref(storage, 'banner/banner1.jpg')

      await getDownloadURL(bannerRef).then((url) => {
        const img = url
        setBannerImage(img)
      })
      return bannerRef
    }
    getBannerImage()
  }, [])

  return (
    <div className="banner">
      <div className="banner-text-container">
        <span className="banner-text">Бесплатная доставка при заказе 4-х средств</span>
        <span className="banner-text-second-line">*при покупке 2-х средств гель-молочко в подарок</span>
      </div>
      <div className="image-container">
        <img className="banner-image" src={bannerImage} alt="Изображение девушки на бежевом фоне" />
      </div>
    </div>
  )
}
