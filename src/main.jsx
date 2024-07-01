import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Intro from './components/Intro/Intro'
import Navbar from './components/navbar/navbar'
import Quote from './components/Quote/Quote'
import TattooArtist from './components/TattooArtist/TattooArtist'


function Main() {
    const [isSticky, setSticky] = useState(false);
    let sticky = 0;

    const handleScroll = () => {
        if (window.scrollY > sticky - 10) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        const navbar = document.getElementById("navbar");
        sticky = navbar.offsetTop;

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <React.StrictMode>
            <Intro />
            <Navbar isSticky={isSticky} />
            <Quote isSticky={isSticky} />
            <TattooArtist />
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);