import React from 'react'
import './SpinningText.css'
import curvedText from '../../../assets/curvedText.svg'

export const SpinningText: React.FC = () => {
  return (
    <>
    <div className='text-spinning'>
            <img className='spinning-item' src={curvedText} alt="spinning_logo"/>
        </div>
    </>
  )
}
