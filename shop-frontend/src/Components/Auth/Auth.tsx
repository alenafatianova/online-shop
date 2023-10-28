import React from 'react'
import './Auth.css'

export const Auth = () => {
  return (
    <React.Fragment>
        <div className='container'>
            <div className='background__auth'>
                <img className='background__image' src={require('../../assets/auth_background.png')} alt="Background image" />
            </div>
        </div>
    </React.Fragment>
  )
}
