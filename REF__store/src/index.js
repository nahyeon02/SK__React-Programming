import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import reportWebVitals from './reportWebVitals'

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals(console.log)
