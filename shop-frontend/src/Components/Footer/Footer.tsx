import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to={'/'}>
          <img src={require('../../assets/curvedText.svg')} alt="Логотип бренда St.Moriz" className="footer-logo" />
        </Link>
        <div className="socials-menu-block">
          <a
            href={'https://www.instagram.com/stmoriz/'}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <img
              src={require('../../assets/instagram.svg')}
              alt="Иконка на инстаграм бренда"
              className="instagram-icon"
            />
          </a>
          <a
            href={'https://www.facebook.com/St.Moriz.Tan/'}
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <img
              src={require('../../assets/facebook.svg')}
              alt="Иконка на группу в сети Фейсбук"
              className="facebook-icon"
            />
          </a>
          <a type="email" target="_blank" rel="noopener noreferrer" href={'buy@stmoriz.com'} />
        </div>
        <div className="about-menu-block">
          <Link to={'/about'}>Бренд St. Moriz</Link>
          <Link to={'/payments'}>Оплата и доставка</Link>
          <Link to={'/contacts'}>Контакты</Link>
        </div>
        <div className="products-menu-block">
          <Link to={'/catalogue'}>Каталог</Link>
          <Link to={'/usage'}>Как пользоваться</Link>
          <Link className="sale-link" to={'/sales'}>
            Sale
          </Link>
        </div>
        <div className="rights-menu">
          <a href="#">{`Все права защищены ${new Date().getFullYear()}`}</a>
          <span>Политика конфиденциальности</span>
        </div>
      </div>
    </footer>
  )
}
