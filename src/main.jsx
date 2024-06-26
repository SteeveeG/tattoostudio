import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Intro from './components/Intro/Intro'
import Navbar from './components/navbar/navbar'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Intro />
      <Navbar />
    </div>
  </React.StrictMode>,
)
