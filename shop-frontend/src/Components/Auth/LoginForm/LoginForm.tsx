import React, { useState } from 'react'
import './LoginForm.css'
import { Auth, UserCredential, signInWithEmailAndPassword } from 'firebase/auth'

interface LoginFormType {
  buttonState: string
  setButtonState: (buttonState: string) => void
  proccessLogin?: (promise: Promise<UserCredential>) => Promise<UserCredential>
  auth: Auth
}

export const LoginForm: React.FC<LoginFormType> = ({ setButtonState, auth }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLoginBtnHandler = (e: any) => {
    e.preventDefault()
    setButtonState('login')
    signInWithEmailAndPassword(auth, email, password)
  }

  return (
    <form>
      <div className="form_auth__inputs">
        <div className="form_auth__input__login">
          <label className="form_auth__label login">Email</label>
          <input className="input_login" type="text" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
        </div>
        <div className="form_auth__input__password">
          <label className="form_auth__label password">Пароль</label>
          <input
            className="input_password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
      </div>
      <button className="form_auth__button_action" onClick={onLoginBtnHandler}>
        Войти
      </button>
    </form>
  )
}
