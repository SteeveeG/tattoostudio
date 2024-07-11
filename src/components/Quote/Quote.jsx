import React from 'react'            
import css from './Quote.module.css'
import { useTranslation } from "react-i18next";


 

function Quote() {
    const { t } = useTranslation();

    return (
        <div className={css.div}>
            <div className={css.box}>
                <p className={css.Quote}>{t("Quote")}</p>
            </div>
        </div>
    )
}

export default Quote;
