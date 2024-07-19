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
          <p className={css.headeradress}>adress</p>
          <p className={css.address}>
            Pliensaustraße 37<br />Esslingen 73728</p>
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
        <div className={css.openingtimediv}>
          <p className={css.openingtimeheader}>opening hours</p>
          <p className={css.openingtime}>mon - sat</p>
          <p className={css.openingtime} >11:00 to 18:00</p>
        </div>
        <img src={examplepic} alt="example pic" className={css.maps} />
      </div>



    </div>
  )
}

export default Location
