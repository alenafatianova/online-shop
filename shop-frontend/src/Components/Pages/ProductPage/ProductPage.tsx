import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import { cataloguePageProducts } from '../CataloguePage/utils'
import { ProductType } from '../../types'
import { NavLink } from 'react-router-dom'
import { Breadcrumb, Button, Carousel } from 'antd'
import { HeartOutlined, LeftOutlined, MinusOutlined, PlusOutlined, RightCircleOutlined, RightOutlined } from '@ant-design/icons'

type ProductPageType = {
  id: string | undefined
}

export const ProductPage: React.FC<ProductPageType> = ({ id }) => {
  const [product, setProduct] = useState<ProductType[] | null>(null)
  const [productCount, setProductCount] = useState(0)
  const [slider, setSlider] = useState(1)

  useEffect(() => {
    const productWithId = cataloguePageProducts.filter((product) => product.id === String(id?.slice(1)))
    setProduct(productWithId)
  }, [])

  console.log(product)

  const breadcrumbsItems = [
    {
      title: <NavLink to="/">Главная</NavLink>,
    },
    {
      title: <NavLink to="/catalogue">Каталог</NavLink>,
    },
    {
      title: <NavLink to="/">Муссы</NavLink>,
    },
    {
      title: <NavLink to="/product/:${id}">Каталог</NavLink>,
    },
  ]

  const onSliderChange = () => {
   setSlider(slider + 1)
  };

  return (
    <div className="product-page_wrapper">
      <Breadcrumb className="breadcrumbs" items={breadcrumbsItems} />
        {product?.map((product) => (
          <div key={product.id} className="product-page_container">
           
            <Carousel 
                prevArrow={<LeftOutlined />} 
                nextArrow={<RightOutlined />} 
                arrows={true} 
                effect='fade' 
                afterChange={onSliderChange} 
                className='product_carouse-image'
            >
            <div className='product-image'>
            <img src={product.image} alt="Продукт St.Moriz" />
            </div>
            </Carousel>
           
           
            <div className="product-description">
              <h2>{product.title}</h2>
              <p>{product.volume}</p>
              <p>Код товара:{product.productCode}</p>
              <p className="product-price">{product.price}</p>
              <div className="product-buttons">
                <button className="button_product-count">
                  <PlusOutlined />
                  {productCount}
                  <MinusOutlined />
                </button>
                <button className="button_product-add">В корзину</button>
                <HeartOutlined className='button_product-favorites' />
              </div>
            </div>
          </div>
        ))}
      <div className='product_recommendations'>
            <h3 className='product_recommendations-header'>Рекомендации</h3>
            <p>Не соприкасайтесь с поверхностью ткани до тех, пока кожа не высохнет полностью. Надевайте темную одежду после нанесения, так как все средства содержат тонировку, которая может окрасить  светлую ткань</p>
            <p>Загар закрепляется на коже в течение 5-8 часов, в этот период избегайте контакта кожи с водой, особенно, если проводите процедуру НЕ перед сном.</p>
            <p>Эффективнее всего  наносить автобронзант  перед сном, и оставить средство на коже на ночь. Рекомендуется смыть средство в душе через 6-8 часов после нанесения. Тонировка смоется во время принятия душа, на Вашей коже останется лишь золотистый оттенок загара!</p>
            <p>Оттенок загара будет держаться 5-10 дней в зависимости от типа кожи! Средство можно  нанести повторно, сразу же после первого применения, для получения более насыщенного темного загара или так часто, как необходимо поддерживать оттенок загара на коже.</p>
            <p>Ежедневно используйте увлажняющие средства для кожи лица и тела, для того, чтобы Ваш идеальный загар держался еще дольше!</p>
      </div>

      <div className='product_alike-products'>
            <h3>Похожие товары</h3>
      </div>
    </div>
  )
}
