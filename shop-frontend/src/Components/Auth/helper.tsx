import React from 'react'
import { Navigate } from 'react-router'

type PrivateRoutesType = {
  children: React.ReactNode
  isAuth: boolean
}

export const PrivateRoutes: React.FC<PrivateRoutesType> = ({ children, isAuth }) => {
  return <React.Fragment>{!isAuth ? <Navigate to="/auth" /> : children}</React.Fragment>
}

export const validateEmail = (email: string | undefined): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
