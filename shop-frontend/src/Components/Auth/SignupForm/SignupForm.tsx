import React, { useState } from 'react'
import './SignupForm.css'
import { Auth, createUserWithEmailAndPassword } from 'firebase/auth'
import { validateEmail } from '../helper'
import { Navigate, useNavigate } from 'react-router-dom'
import { SignupSuccess } from '../SignupSuccess/SignupSuccess'

interface SignupFormType {
  auth: Auth
  setIsRegistered: (isRegistered: boolean) => void
}

export const SignupForm: React.FC<SignupFormType> = ({ auth, setIsRegistered}) => {
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const navigate = useNavigate()
 
  const [isAgreementChecked, setIsAgreementChecked] = useState(false)
  const [isSalesChecked, setIsSalesChecked] = useState(false)

  const onAgreementHandler = () => {
    setIsAgreementChecked(!isAgreementChecked)
  }

  const onSalesHandler = () => {
    setIsSalesChecked(!isSalesChecked)
  }

  const onSignupHandler = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('event: ', event)
    event.preventDefault()
    createUserWithEmailAndPassword(auth, newEmail, newPassword)
    setIsRegistered(true)
  }

  return (
    <form className="form_auth__container" name='signup_form' onSubmit={onSignupHandler}>
      <div className="form_signup__inputs">
        <div className="form_signup__input">
          <label className="form_auth__label name">Имя</label>
          <input
            className="input_name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
          />
        </div>

        <div className="form_signup__input">
          <label className="form_auth__label surname">Фамилия</label>
          <input
            className="input_surname"
            type='text'
            value={userSurname}
            onChange={(e) => setUserSurname(e.currentTarget.value)}
          />
        </div>

        <div className="form_signup__input">
          <label className="form_auth__label email">Email</label>
          <input
            className="input_login"
            type="email"
            value={newEmail}
            onChange={e => setNewEmail(e.currentTarget.value)}
            required
          />
        </div>

        <div className="form_signup__input">
          <label className="form_auth__label password">Пароль</label>
          <input
            className="input_password"
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.currentTarget.value)}
            minLength={9}
            required
          />
        </div>

        <div className="form_signup__checkboxes">
          <div className="form_signup__checkbox_agreement">
            <label className="signup__label">
              <input
                className="signup_checkbox"
                type="checkbox"
                checked={isAgreementChecked}
                onChange={onAgreementHandler}
                required
              />
              Я ознакомилась(-лся) с Условиями использования и Политикой Конфиденциальности
            </label>
          </div>
          <div className="form_signup__checkbox_sales">
            <label className="signup__label">
              <input className="signup_checkbox" type="checkbox" checked={isSalesChecked} onChange={onSalesHandler} />Я
              согласна(-сен) получать оповещения о скидках, акциях и новых поступлениях на E-Mail
            </label>
          </div>
        </div>
      </div>
      <button className="form_signup__button_action">
        Зарегистрироваться
      </button>
    </form>
  )
}
