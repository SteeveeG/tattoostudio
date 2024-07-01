import React from 'react'
import css from './Quote.module.css'

function Quote({isSticky}) {
     return (
          <div className={isSticky ? css.Stickydiv  : css.div}>
               <div className={css.box}>
                    <p className={css.Quote}>Where the ink meets<br/>the soul, art is born.</p>
               </div>
          </div>
     )
}

export default Quote;