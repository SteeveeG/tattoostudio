import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Intro from './components/Intro/Intro'
import Navbar from './components/navbar/navbar'
import Quote from './components/Quote/Quote'
import TattooArtist from './components/TattooArtist/TattooArtist'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro />
    <Navbar />
    <Quote />
    <TattooArtist/>
  </React.StrictMode>,
)
