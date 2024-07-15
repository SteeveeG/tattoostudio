import React from 'react'
import introCss from './Intro.module.css'


function Intro() {
  return (
      <div className={introCss.div}>
        <div className={introCss.yourtattoodiv}>
          <p className={introCss.headeryour}>Your</p>
          <p className={introCss.headertattoo}>Tattoo</p>
        </div>
        <p className={introCss.headerstudio}>Studio</p>
      </div>
  )
}

export default Intro
