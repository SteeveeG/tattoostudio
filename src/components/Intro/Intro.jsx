import React from 'react'
import introCss from './Intro.module.css'
 

function Intro() {
  return (
    <div className={introCss.div}>
      <div className={introCss.YourTattooDiv}>
        <p className={introCss.HeaderYour} >Your</p>
        <p className={introCss.HeaderTattoo}>Tattoo</p>
      </div>
      <p className={introCss.HeaderStudio}>Studio</p>
    </div>
  )
}

export default Intro
