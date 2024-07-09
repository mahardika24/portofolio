import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Landing/Home.jsx'
import About from './component/About/About.jsx'
import './index.css'
import './font/Engin-Regular.otf';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <About />
  </React.StrictMode>,
)
