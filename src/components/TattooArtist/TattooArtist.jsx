import React, { useEffect } from 'react'
import css from './TattooArtist.module.css'
import example from '../../Assets/Example.png'
import { useTranslation } from "react-i18next";



function TattooArtist() {
     const { t } = useTranslation();
  
     return (
          <div className={css.box}>
               <div>
                <p className={css.header}>{t("TattooArtists")}</p>
                     <div className={css.row}>
                              <div className={css.column}>
                                   <img src={example} className={css.Pic} style={{height: '500px' }} alt="example pic" />
                              </div>
                         <div className={css.column}>
                                                                                
                              <img src={example} className={css.Pic} style={{width: '400px', height:'100px' }} alt="example pic" />
                         </div>

                         <div className={css.column}>
                              <img src={example} className={css.Pic} alt="example pic" />
                         
                         </div>

                         <div className={css.column}>
                         
                              <img src={example} className={css.Pic} alt="example pic" />
                         </div>
                    </div>
               </div>

          </div>

     )
}

export default TattooArtist;
