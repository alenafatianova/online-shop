import React, { useState } from 'react'
import './SignupForm.css'


export const SignupForm = () => {
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [userSurname, setUserSurname] = useState('')
  
    const [isAgreementChecked, setIsAgreementChecked] = useState(false)
    const [isSalesChecked, setIsSalesChecked] = useState(false)
  
    const onAgreementHandler = () => {
      setIsAgreementChecked(true)
    }
  
    const onSalesHandler = () => {
      setIsSalesChecked(true)
    }
    return (
      <form className='form_auth__container'>
        <div className="form_auth__inputs">
          <div className="form_auth__input">
            <label className="form_auth__label name">Имя</label>
            <input
              className="input_login"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.currentTarget.value)}
            />
          </div>
  
          <div className="form_auth__input">
            <label className="form_auth__label surname">Фамилия</label>
            <input
              className="input_login"
              type="text"
              value={userSurname}
              onChange={(e) => setUserSurname(e.currentTarget.value)}
            />
          </div>
  
          <div className="form_auth__input">
            <label className="form_auth__label email">Email</label>
            <input
              className="input_login"
              type="text"
              value={newEmail}
              onChange={(e) => setNewEmail(e.currentTarget.value)}
            />
          </div>
  
          <div className="form_auth__input">
            <label className="form_auth__label password">Пароль</label>
            <input
              className="input_password"
              type="text"
              value={newPassword}
              onChange={(e) => setNewPassword(e.currentTarget.value)}
            />
          </div>
  
          <div className="form_signup__checkboxes">
            <div className="form_signup__checkbox_agreement">
              <label className='signup__label'>
                <input className='signup_checkbox' type="checkbox" checked={isAgreementChecked} onChange={onAgreementHandler} required />
                Я ознакомилась(-лся) с Условиями использования и Политикой Конфиденциальности
              </label>
            </div>
            <div className="form_signup__checkbox_sales">
              <label className='signup__label'>
              <input className='signup_checkbox' type="checkbox" checked={isSalesChecked} onChange={onSalesHandler} />
                Я согласна(-сен) получать оповещения о скидках, акциях и новых поступлениях на E-Mail
            </label>
              
            </div>
          </div>
        </div>
        <button className="form_signup__button_action">Зарегистрироваться</button>
      </form>
    )
}
  