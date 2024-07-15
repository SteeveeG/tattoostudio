import React, { useState, useEffect, useRef }  from 'react'
import i18next from "../i18n/i18n";
import css from './navbar.module.css'
import { useTranslation } from "react-i18next";

function navbar() {
  const { t } = useTranslation();
  let checkbox = useRef(null);
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
    checkbox.checked = false;
}
  return (
    <nav id='navbar' className={css.nav}>
       <li className={css.tattoostudio}>
          <a href="#" className={css.tattoostudiolink} onClick={() => closeNavbar()}>{t("tattoostudioname")}</a>
        </li>
      <input type="checkbox" id="toggle_button" ref={(Element) =>
         checkbox = Element} className={css.togglebtn} />
      <label htmlFor="toggle_button" className={css.togglebutton}>
        <span className={css.bar} />
        <span className={css.bar} />
        <span className={css.bar} />
      </label>
      <ul className={css.linklist}>
        <li className={css.linkcontainer}>
          <a href="#" className={css.linktext} onClick={() => closeNavbar()}>{t("tattooartists")}</a>
        </li>
        <li className={css.linkcontainer}>
          <a href="#" className={css.linktext} onClick={() => closeNavbar()}>{t("contact")}</a>
        </li>
        <li className={css.ultattoologo}>
          <a href="#" className={css.linklogo}>{t("tattoostudioname")}</a>
        </li>
        <li className={css.linkcontainer}>
          <a href="#" className={css.linktext} onClick={() => closeNavbar()}>{t("location")}</a>
        </li>
        <div className={css.languagediv}>
          <div className={css.languagecontainer}>
            <input type="radio" id="De" name="language" checked={lang === 'de'} 
            onClick={() => closeNavbar()}
             className={css.radio} onChange={() => changeLanguage('de')} />
            <label htmlFor="De" className={css.language}>De</label>
          </div>
          <div className={css.languagecontainer}>
            <input type="radio"  onChange={() => changeLanguage('en')} 
              id="En" className={css.radio} checked={lang === 'en'}  onClick={() => closeNavbar()}
              name="language" />
            <label htmlFor="En" className={css.language}>En</label>
          </div>
        </div>
      </ul>
    </nav>
  )
}
export default navbar;