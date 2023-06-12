import React, { useState } from 'react'
import './Bestsellers.css'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { slides } from './helper'

export const NewProducts: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goForward = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
  }

  const goBack = () => {
    setCurrentIndex(currentIndex < 1 ? slides.length - 1 : currentIndex - 1)
  }
  return (
    <React.Fragment>
      <section className="new-products-container">
        <div className="new-products-content">
          <div className="arrows-carousel">
            <ArrowLeftOutlined className="arrow-left" onClick={goBack} />
            <ArrowRightOutlined className="arrow-right" onClick={goForward} />
          </div>
          <h3 className="new-products-title">Новинки</h3>
          <div className="new-products">
            <div className="collection-description">
              <p>
                Новая коллекция с алоэ вера и гиалуроновая кислота, для того чтобы ваша кожа была не только загорелой,
                но и здоровой и увлажненной.
              </p>
              <p>Широкая линейка оттенков позволит выбрать именно тот, что подходит вам.</p>
              <p>Коллекция также содержит продукты, которые быстро высыхают и не оставляют следов на вашей одежде. </p>
            </div>
            <div className={'product-carousel'}>
              <div
                className={'image-carousel'}
                style={{
                  backgroundImage: `url(${slides[currentIndex].url})`,
                  backgroundSize: 'cover',
                  //transform: `translateX(${currentIndex ? currentIndex * 100 : -500}%)`
                  transform: `translateX(-${currentIndex * 10}%)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
