import React, { useState } from 'react'
import './Auth.css'

export const Auth = () => {
  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const onLoginBtnChange = (e: any) => {
    e.preventDefault()
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="background__auth">
          <img className="background__image" src={require('../../assets/auth_background.png')} alt="Background image" />
        </div>
        <div className="auth__form">
          <form action="">
            <h2>Авторизация</h2>
            <div className="form_auth__buttons">
              <button className='form_auth__button' onClick={onLoginBtnChange}>Регистрация</button>
              <button className='form_auth__button' onClick={onLoginBtnChange}>Вход</button>
            </div>
            <div className='form_auth__inputs'>
              <div className="form_auth__input__login">
                <label className="form_auth__label login">Имя</label>
                <input className='input_login' type="text" value={inputLogin} onChange={(e) => setInputLogin(e.currentTarget.value)} />
              </div>
              <div className="form_auth__input__password">
                <label className="form_auth__label password">Пароль</label>
                <input className='input_password' type="text" value={inputPassword} onChange={(e) => setInputPassword(e.currentTarget.value)} />
              </div>
            </div>

            <button className="form_auth__button_action">Войти</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}
