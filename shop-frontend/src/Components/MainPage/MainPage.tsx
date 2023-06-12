import React from 'react'
import './MainPage.css'
import { InstagramSection } from '../InstagramSection/InstagramSection'
import { NewProducts } from '../NewProducts/NewProducts'
import { CatalogueSection } from '../CatalogueSection/CatalogueSection'

export const MainPage: React.FC = () => {
  return (
    <section>
      <h3 className="title">St.Moriz</h3>
      <div className="main-page-container">
        <CatalogueSection />
        <NewProducts />
        <InstagramSection />
      </div>
    </section>
  )
}
