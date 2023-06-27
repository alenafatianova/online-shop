import React from 'react'
import './NewProducts.css'
import { ProductCarousel } from '../ProductCarousel/ProductCarousel'

export const NewProducts: React.FC = () => {
  return (
    <React.Fragment>
      <section className="new-products-container">
        <div className="new-products-content">
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
              <ProductCarousel />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
