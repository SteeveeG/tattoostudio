import React from 'react'
import introCss from './Intro.module.css'
import vid from  '../../Assets/TattooStudio.mp4'

function Intro() {
    return (
        <div className={introCss.div}>
            <div className={introCss.yourtattoodiv}>
                <p className={introCss.headeryour}>Your</p>
                <p className={introCss.headertattoo}>Tattoo</p>
            </div>
            <video className={introCss.vid} src={vid} autoPlay muted loop>
            </video>

            <p className={introCss.headerstudio}>Studio</p>
        </div>
    )
}

export default Intro
