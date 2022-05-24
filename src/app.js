import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import './styles/style.scss'
import 'normalize.css/normalize.css'
ReactDOM.render(
  <React.StrictMode>
    <IndecisionApp />
  </React.StrictMode>,
  document.getElementById('app')
)
