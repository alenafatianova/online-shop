import React, { useState } from 'react'
import './Auth.css'
import { SignupForm } from './SignupForm/SignupForm'
import { AuthForm } from './AuthForm/AuthForm'

export const Auth = () => {
 
    const [state, setState] = useState<'login' | 'signup'>('login')

    const onLoginBtnChange = (e: any) => {
        e.preventDefault()
        setState('login')
    }

  const onSignupBtnChange = (e: any) => {
    e.preventDefault()
    setState('signup')
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="background__auth">
          <img className="background__image" src={require('../../assets/auth_background.png')} alt="Background image" />
        </div>

        <div className={(state === 'signup' ) ? 'auth__form_signup' : "auth__form"}>
          <h2 className='auth_form__h2'>Авторизация</h2>
          <div className="form_auth__buttons">
            <button className="form_auth__button"  onClick={onSignupBtnChange}>
                Регистрация
            </button>
            <button className="form_auth__button"  onClick={onLoginBtnChange}>
              Вход
            </button>
          </div>
          {state === 'login' ? <AuthForm /> : <SignupForm />}
        </div>
      </div>
    </React.Fragment>
  )
}



