import React from 'react'
import css from './Contact.module.css'
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();

    return (
        <div className={css.box}>
            <p className={css.navigator} id='Contact'></p>
            <p className={css.header}>{t("contact")}</p>
            <div className={css.flexbox}>
                <div>
                    <p className={css.info}>{t("contactinfo")}</p>
                    <ul className={css.links}>
                        <li> <a href="https://github.com/SteeveeG" target="_blank"
                            className={css.link}>Github</a></li>
                        <li> <a href="https://stevenkuehnl.com" target="_blank"
                            className={css.link}>Website</a></li>
                    </ul>
                </div>

                <div className={css.linkcontainer}>
                    <ul className={css.linklist}>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>Samuel</a>
                            </li>
                        </div>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>Lenni</a>
                            </li>
                        </div>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>John</a>
                            </li>
                        </div>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>Isabell</a>
                            </li>
                        </div>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>Emma</a>
                            </li>
                        </div>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>WhatsApp</a>
                            </li>
                        </div>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>Instagram</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className={css.bookingdiv}>
                <p className={css.bookinginfo}>{t("bookinginfo")}</p>
            </div>
        </div>
    )
}

export default Contact;
