import React, { useState, useEffect, useRef }  from 'react'
import css from './navbar.module.css'

function navbar() {
  let Checkbox = useRef(null);
  return (
    <nav id='navbar' className={css.nav}>
       <li className={css.TattooStudio}>
          <a href="#" className={css.TattooStudioLink}>your tattoo studio</a>
        </li>
      <input type="checkbox" id="toggle_button" ref={(Element) =>
         Checkbox = Element} className={css.togglebtn} />
      <label htmlFor="toggle_button" className={css.togglebutton}>
        <span className={css.bar} />
        <span className={css.bar} />
        <span className={css.bar} />
      </label>
      <ul className={css.Linklist}>
        <li>
          <a href="#" className={css.LinkText}>tattoo artists</a>
        </li>
        <li>
          <a href="#" className={css.LinkText}>contact</a>
        </li>
        <li className={css.ultattoologo}>
          <a href="#" className={css.LinkLogo}>your tattoo studio</a>
        </li>
        <li>
          <a href="#" className={css.LinkText}>location</a>
        </li>
        <div className={css.LanguageDiv}>
          <div className={css.LanguageContainer}>
            <input type="radio" id="De" name="language"
              className={css.Radio}
            />
            <label htmlFor="De" className={css.language}>De</label>
            <span className={css.LanguageSelectedBar} ></span>
          </div>
          <div className={css.LanguageContainer}>
            <input type="radio"
              id="En" className={css.Radio}
              name="language"
            />
            <label htmlFor="En" className={css.language}>En</label>
            <span className={css.LanguageSelectedBar} ></span>
          </div>
        </div>
      </ul>
    </nav>
  )
}
export default navbar;