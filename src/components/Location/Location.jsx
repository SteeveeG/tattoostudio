import React from 'react'
import css from './Location.module.css'
import examplepic from '../../Assets/Example.png'
import gebäude1 from '../../Assets/Gebäude1.jpg'
import gebäude2 from '../../Assets/Gebäude2.jpg'
import { useTranslation } from "react-i18next";


function Location() {
  const { t } = useTranslation();

  return (
    <div className={css.box}>
      <p className={css.navigator} id='Location'></p>

      <p className={css.header}>{t("location")}</p>
      <div className={css.div1}>
        <img src={gebäude1} alt="example pic" className={css.building} />
        <div className={css.container} >
          <p className={css.headeradress}>{t("adress")}</p>
          <p className={css.address}>
            baumwerder 37<br />höningen 432</p>
          <ul>
            <li>
              <a href="#" className={css.link}>{t("googlemaps")}</a>
            </li>
            <li>
              <a href="#" className={css.link}>{t("applemaps")}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.div2}>
        <div className={css.openingtimediv}>
          <p className={css.openingtimeheader}>{t("openinghoursheader")}</p>
          <p className={css.openingtime}>{t("openingdays")}</p>
          <p className={css.openingtime}>{t("openinghours")}</p>
        </div>
        <img src={gebäude2} alt="example pic" className={css.maps} />
      </div>



    </div>
  )
}

export default Location
