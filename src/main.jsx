import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 export const  Context = createContext('gold')

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value='gold'>


    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Context.Provider>
  )
