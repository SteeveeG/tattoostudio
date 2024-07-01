import React, { useState, useEffect } from 'react'
import css from './navbar.module.css'

function navbar() {
  const [isSticky, setSticky] = useState(false);

 
 
  function handleScroll(){
    if (window.scrollY > sticky) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;


    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  return (
    <nav id='navbar' className={isSticky ? css.Stickynav  : css.nav }>
      <ul className={css.Linklist}>
        <li>
          <a href="#" className={css.Linktext}>tattoo artists</a>
        </li>
        <li>
          <a href="#" className={css.Linktext}>contact</a>
        </li>
        <li>
          <a href="#" className={css.LinkLogo}>your tattoo studio</a>
        </li>
        <li>
          <a href="#" className={css.Linktext}>location</a>
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