import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'
import './common.css'
import reportWebVitals from '../../reportWebVitals'
import { app, initializeAPI } from '../api'

initializeAPI()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App firebaseApp={app} />
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
