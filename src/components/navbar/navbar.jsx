import React, { useState, useEffect, useRef }  from 'react'
import i18next from "../i18n/i18n";
import css from './navbar.module.css'
import { useTranslation } from "react-i18next";

function navbar() {
  const { t } = useTranslation();
  let Checkbox = useRef(null);
  useEffect(() => {
    function handleLanguageChange(lng) {
        document.body.classList.remove('en', 'de');
        document.body.classList.add(lng);
    }

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
        i18next.off('languageChanged', handleLanguageChange);
    };
}, []);

const [lang, setLang] = useState('en');

const changeLanguage = (lng) => {
    setLang(lng);
    i18next.changeLanguage(lng);
}
const closeNavbar = () => {
    Checkbox.checked = false;
}
  return (
    <nav id='navbar' className={css.nav}>
       <li className={css.TattooStudio}>
          <a href="#" className={css.TattooStudioLink} onClick={() => closeNavbar()}>{t("TattooStudioName")}</a>
        </li>
      <input type="checkbox" id="toggle_button" ref={(Element) =>
         Checkbox = Element} className={css.togglebtn} />
      <label htmlFor="toggle_button" className={css.togglebutton}>
        <span className={css.bar} />
        <span className={css.bar} />
        <span className={css.bar} />
      </label>
      <ul className={css.Linklist}>
        <li className={css.LinkContainer}>
          <a href="#" className={css.LinkText} onClick={() => closeNavbar()}>{t("TattooArtists")}</a>
        </li>
        <li className={css.LinkContainer}>
          <a href="#" className={css.LinkText} onClick={() => closeNavbar()}>{t("Contact")}</a>
        </li>
        <li className={css.ultattoologo}>
          <a href="#" className={css.LinkLogo}>{t("TattooStudioName")}</a>
        </li>
        <li className={css.LinkContainer}>
          <a href="#" className={css.LinkText} onClick={() => closeNavbar()}>{t("Location")}</a>
        </li>
        <div className={css.LanguageDiv}>
          <div className={css.LanguageContainer}>  
            <input type="radio" id="De" name="language" checked={lang === 'de'} 
            onClick={() => closeNavbar()}
             className={css.Radio} onChange={() => changeLanguage('de')} />
            <label htmlFor="De" className={css.language}>De</label>
          </div>
          <div className={css.LanguageContainer}>
            <input type="radio"  onChange={() => changeLanguage('en')} 
              id="En" className={css.Radio} checked={lang === 'en'}  onClick={() => closeNavbar()}
              name="language" />
            <label htmlFor="En" className={css.language}>En</label>
          </div>
        </div>
      </ul>
    </nav>
  )
}
export default navbar;