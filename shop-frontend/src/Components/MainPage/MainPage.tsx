import React, { useEffect, useState } from 'react'
import './MainPage.css'
import { InstagramSection } from '../InstagramSection/InstagramSection'
import { NewProducts } from '../NewProducts/NewProducts'
import { CatalogueSection } from '../CatalogueSection/CatalogueSection'
import { UsageVideo } from '../UsageVideo/UsageVideo'
import { Banner } from '../Banner/Banner'
import { Products } from '../Products/Products'
import { getBestsellers, getNewies } from '../../api'
import { ProductType } from '../types'

export const MainPage: React.FC = () => {
  const [bestsellers, setBestsellers] = useState<ProductType[]>([])
  const [newies, setNewies] = useState<ProductType[]>([])

  // get bestsellers:
  useEffect(() => {
    (async () => {
      const bestsellers = await getBestsellers()
      setBestsellers(bestsellers)
    })()
  }, [bestsellers])

  // get new products:
  useEffect(() => {
    (async () => {
      const newProducts = await getNewies()
      setNewies(newProducts)
    })()
  }, [newies])



  return (
    <section>
      <h3 className="title">St.Moriz</h3>
      <div className="main-page-container">
        <CatalogueSection />
        <NewProducts />
        <Products  products={newies} shortDescription={'Новая коллекция'} header={'Новинки'} />
        <Products products={bestsellers} shortDescription={'Популярные товары'} header={'Бестселлеры'} />
        <Banner />
        <UsageVideo />
        <InstagramSection />
      </div>
    </section>
  )
}
