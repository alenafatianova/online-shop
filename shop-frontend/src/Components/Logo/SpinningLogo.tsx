import React from 'react'
import './SpinningLogo.css'
import curvedText from '../../assets/curvedText.svg'

interface Logo {
  className?: string
}

export const SpinningLogo: React.FC<Logo> = () => {
  return (
    <>
      <div className="logo-spinning">
        <img className="spinning-item" src={curvedText} alt="spinning_logo" />
      </div>
    </>
  )
}
