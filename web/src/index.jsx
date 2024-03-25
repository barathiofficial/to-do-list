import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './app.scss'

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

root.render(<App />)
