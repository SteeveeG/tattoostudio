import React from 'react'
import css from './Location.module.css'
import examplepic from '../../Assets/Example.png'


function Location() {
  return (
    <div className={css.box}>
      <p className={css.header}>Location</p>
      <div className={css.div1}>
        <img src={examplepic} alt="example pic" className={css.building} />
        <div className={css.container} >
          <p className={css.address}>
              Pliensaustraße 37 Esslingen 73728</p>
          <ul>
            <li>
              <a href="#" className={css.link}>Google Maps</a>
            </li>
            <li>
              <a href="#" className={css.link}>Apple Karten</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.div2}>
      <p className={css.openingtime}>
        open:
        from 11:00 to 18:00
        Monday to saturday
      </p>
      <img src={examplepic} alt="example pic" className={css.maps} />
      </div>



    </div>
  )
}

export default Location
