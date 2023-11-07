import React from 'react'
import './SignupSuccess.css'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { Navigate } from 'react-router'
import { NavLink } from 'react-router-dom'

export const SignupSuccess = () => {
  return (
    <div className='signup_success__wrapper'>
       <div className='signup_success__mark'> <CheckCircleTwoTone twoToneColor="#52c41a"/></div>
        <p className='signup_success__text'>Вы успешно зарегистрированы! </p>
        <p>Перейти на <NavLink to='/'><link rel="stylesheet" href="" />главную страницу</NavLink></p>
    </div>
  )
}
