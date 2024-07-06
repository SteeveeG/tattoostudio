import React from 'react'
import css from './navbar.module.css'

function navbar() {

  return (
    <nav id='navbar' className={css.nav }>
      <ul className={css.Linklist}>
        <li>
          <a href="#" className={css.LinkText}>tattoo artists</a>
        </li>
        <li>
          <a href="#" className={css.LinkText}>contact</a>
        </li>
        <li>
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