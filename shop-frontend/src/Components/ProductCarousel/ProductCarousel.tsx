import React, { useEffect, useState, Children } from 'react'
import './ProductCarousel.css'
import { slidesImages } from './utils'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'

interface CarouselType {
  children?: React.ReactNode
}

export const ProductCarousel: React.FC<CarouselType> = ({ children }) => {
  const [offset, setOffset] = useState<number>(0)

  const onRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 450
      const maxOffset = -(450 * (slidesImages.length - 1))

      return Math.max(newOffset, maxOffset)
    })
  }

  const onLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 450

      return Math.min(newOffset, 0)
    })
  }

  return (
    <div className="carousel-container">
      <div className="arrows-carousel">
        <ArrowLeftOutlined className="arrow-left" onClick={onLeftArrowClick} />
        <ArrowRightOutlined className="arrow-right" onClick={onRightArrowClick} />
      </div>
      <div className="carousel-window">
        <div className="slides-container-all" style={{ transform: `translateX(${offset}px)` }}>
          {slidesImages.map((el) => {
            return <img src={el.image} className="carousel-image" alt="Слайдер с изображением продукта" />
          })}
        </div>
      </div>
    </div>
  )
}
