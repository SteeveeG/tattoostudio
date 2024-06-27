import React from 'react'
import css from './TattooArtist.module.css'
import example from '../../Assets/Example.png'

function TattooArtist() {
     return (
          <div className={css.div}>
               <div className={css.box}>
                    <p className={css.header}>tattoo artist</p>
                    <div className={css.artists}>
                         <img src={example} className={css.TattooArtist1} alt="example pic" />
                         <img src={example} className={css.TA1ReferencePic1} alt="example pic" />
                         <img src={example} className={css.TA1ReferencePic2} alt="example pic" />
                         <img src={example} className={css.TA1ReferencePic3} alt="example pic" />
                         <img src={example} className={css.TA1ReferencePic4} alt="example pic" />
                    </div>
               </div>
          </div>
     )
}

export default TattooArtist;