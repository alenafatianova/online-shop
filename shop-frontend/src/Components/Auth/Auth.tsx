import React, { useContext, useEffect, useState } from 'react'
import './Auth.css'
import { SignupForm } from './SignupForm/SignupForm'
import { LoginForm } from './LoginForm/LoginForm'
import { User, UserCredential, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { FirebaseApp } from 'firebase/app'
import { SignupSuccess } from './SignupSuccess/SignupSuccess'

interface IFirebaseApp {
  firebaseApp: FirebaseApp
}

interface IAuthContextType {
  isAuth: boolean | null
  user?: User | null
  loginWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>
  logout: () => void
}

export const Auth: React.FC<IFirebaseApp> = ({ firebaseApp }) => {
  const [state, setState] = useState<'login' | 'signup'>('login')
  const [isAuth, setIsAuth] = useState<IAuthContextType['isAuth']>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isRegistered, setIsRegistered] = useState(false)
  const [auth] = useState(getAuth(firebaseApp))
  const logout = () => signOut(auth)

  // const AuthContext = React.createContext({
  //   isAuth: null,
  //   loginWithEmailAndPassword: () => Promise.reject({}),
  //   logout: () => undefined
  // })

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        setIsAuth(true)
      } else {
        setUser(null)
        setIsAuth(false)
      }
    })
  }, [auth])

  // const useAuthContext = () => {
  //   return useContext(AuthContext)
  // }

  const onSignupBtnHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    setState('signup')
  }

  const onLoginBtnHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    setState('login')
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="background__auth">
          <img className="background__image" src={require('../../assets/auth_background.png')} alt="Background image" />
        </div>

       {isRegistered ? 
        <SignupSuccess />
       : (
        <div className={state === 'signup' ? 'auth__form_signup' : 'auth__form'}>
        <h2 className="auth_form__h2">Авторизация</h2>
        <div className="form_auth__buttons">
          <button className="form_auth__button" onClick={onSignupBtnHandler}>
            Регистрация
          </button>
          <button className="form_auth__button" onClick={onLoginBtnHandler}>
            Вход
          </button>
        </div>
        {state === 'login' ? (
          <LoginForm setButtonState={() => setState('login')} buttonState="login" auth={auth} />
        ) : (
          <SignupForm setIsRegistered={setIsRegistered} auth={auth} />
        )}
      </div>
      )}
        
      </div>
    </React.Fragment>
  )
}
