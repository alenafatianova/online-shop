import React from 'react'
import './MainPage.css'
import mist from '../../assets/mist.png'
import mousse from '../../assets/mousse.png'
import { Button } from '../Button/Button'

export const MainPage: React.FC = () => {
  return (
    <section>
        <h3 className='title'>St.Moriz</h3>
        <div className='main-page-container'>
            <div className='image-container'>
                <img src={ mist } alt="Мусс" className='mist-image'/>
                <img src={ mousse } alt="Масло для загара" className='mousse-image'/>
            </div>
            <div className='description'>
                <h3>Безопасный загар и идеальный результат</h3>
                <p>Запатенованная формула с увлажняющими компонентами, </p>
                <p>позволяющая получать профессиональное качество загара</p>
                <p>и ухаживать за Вашей кожей</p>
                
            <div className='button-component'>
                <Button title='Каталог' />
            </div>
            </div>

           
        </div>
    </section>
  )
}
