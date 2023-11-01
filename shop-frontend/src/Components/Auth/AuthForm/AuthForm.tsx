import React, { useState } from 'react'
import './AuthForm.css'


export const AuthForm = () => {
    
    const [inputLogin, setInputLogin] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    
    return (
        <form>
        <div className="form_auth__inputs">
          <div className="form_auth__input__login">
            <label className="form_auth__label login">Имя</label>
            <input
              className="input_login"
              type="text"
              value={inputLogin}
              onChange={(e) => setInputLogin(e.currentTarget.value)}
            />
          </div>
          <div className="form_auth__input__password">
            <label className="form_auth__label password">Пароль</label>
            <input
              className="input_password"
              type="text"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.currentTarget.value)}
            />
          </div>
        </div>
        <button className="form_auth__button_action">Войти</button>
      </form>
    )
  
}