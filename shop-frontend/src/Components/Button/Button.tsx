import React from 'react'
import './Button.css'
import { ArrowRightOutlined } from '@ant-design/icons'

interface IButton {
    title: string
}

export const Button: React.FC<IButton> = ({title}) => {
  return (
    <div className='button-container'>
        <span>{title}</span>
       <div className='button-content'> 
        <button className='circle'></button>
        <ArrowRightOutlined className='arrow'/>
    </div>
    </div>
  )
}
