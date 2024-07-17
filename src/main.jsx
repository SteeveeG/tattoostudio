import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Intro from './components/Intro/Intro'
import Navbar from './components/navbar/navbar'
import Quote from './components/Quote/Quote'
import TattooArtist from './components/TattooArtist/TattooArtist'
import Contact from "./components/Contact/Contact.jsx";


function Main() {
    return (
        <React.StrictMode>
            <header>
                <Intro/>
            </header>
            <Navbar />
            <Quote />
            <TattooArtist/>
            <Contact/>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);