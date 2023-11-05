import React from 'react'
import { Navigate } from 'react-router'

type PrivateRoutesType = {
  children: React.ReactNode
  isAuth: boolean
}

export const PrivateRoutes: React.FC<PrivateRoutesType> = ({ children, isAuth }) => {
  return <React.Fragment>{!isAuth ? <Navigate to="/auth" /> : children}</React.Fragment>
}
