import React from 'react'
import './MainPage.css'
import { InstagramSection } from '../InstagramSection/InstagramSection'
import { NewProducts } from '../NewProducts/NewProducts'
import { CatalogueSection } from '../CatalogueSection/CatalogueSection'
import { UsageVideo } from '../UsageVideo/UsageVideo'
import { Banner } from '../Banner/Banner'

export const MainPage: React.FC = () => {
  return (
    <section>
      <h3 className="title">St.Moriz</h3>
      <div className="main-page-container">
        <CatalogueSection />
        <NewProducts />
        <Banner />
        <UsageVideo />
        <InstagramSection />
      </div>
    </section>
  )
}
