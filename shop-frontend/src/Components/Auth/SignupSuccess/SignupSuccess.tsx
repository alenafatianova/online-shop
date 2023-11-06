import React from 'react'
import './SignupSuccess.css'
import { CheckCircleTwoTone } from '@ant-design/icons'

export const SignupSuccess = () => {
  return (
    <div className='signup_success__wrapper'>
       <div className='signup_success__mark'> <CheckCircleTwoTone twoToneColor="#52c41a"/></div>
        <p className='signup_success__text'>Вы успешно зарегистрированы! </p>
    </div>
  )
}
