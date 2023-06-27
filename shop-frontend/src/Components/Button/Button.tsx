import React from 'react'
import './Button.css'
import { ArrowRightOutlined } from '@ant-design/icons'

interface IButton {
  title: string
  className?: string
  onClick?: () => void
  children?: any
}

export const Button: React.FC<IButton> = ({ title, className, onClick, children }) => {
  return (
    <div className="button-container">
      <span className={className}>{title}</span>
      <div className="button-content">
        <button className="circle" onClick={onClick}>
          {children}
        </button>
        <ArrowRightOutlined className="arrow" />
      </div>
    </div>
  )
}
