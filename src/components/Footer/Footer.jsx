import react from 'react'
import css from './Footer.module.css'
import { useTranslation } from "react-i18next";


function Footer() {
     const { t }=useTranslation ();
     return (
          <footer className={css.container}>
               <p className={css.header}>Your Tattoo Studio</p>
               <div className={css.linkscontainer}>
                    <ul className={css.categorylist}>
                         <li className={css.link}><a href="#TattooArtist">{t("tattooartists")}</a></li>
                         <li className={css.link}><a href="#Contact">{t("contact")}</a></li>
                         <li className={css.link}><a href="#Location">{t("location")}</a></li>
                    </ul>
                    <ul className={css.tattooartistList}>
                         <li className={css.link}><a href="#">samuel</a></li>
                         <li className={css.link}><a href="#">lenni</a></li>
                         <li className={css.link}><a href="#">john</a></li>
                         <li className={css.link}><a href="#">isabell</a></li>
                         <li className={css.link}><a href="#">emma</a></li>
                         <li className={css.link}><a href="#">whatsapp</a></li>
                         <li className={css.link}><a href="#">instagram</a></li>

                    </ul>
               </div>
               <p className={css.copyright}>Copyright © Your Tattoo Studio</p>
          </footer>
     )
}

export default Footer
