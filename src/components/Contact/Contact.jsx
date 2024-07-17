import React from 'react'
import css from './Contact.module.css'
import { useTranslation } from "react-i18next";

function Contact () {
    const { t }=useTranslation ();

    return (
        <div className={css.box}>
            <p className={css.header}>Contact</p>
            <div className={css.flexbox}>
                <p className={css.info}>
                    Please Note Before Contacting us we need:
                    Your Full Age a Description of your Idea as precise as you can,
                    and if you can, send some inspirations pictures,
                    the approxomate desired size of the Tattoo,
                    wich Body youre considering (Photo),
                    When Youre Most Available
                </p>
                <div>
                    <ul className={css.linklist}>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>Tattoo Artist 1</a>
                            </li>
                        </div>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>Tattoo Artist 2</a>
                            </li>
                        </div>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>Tattoo Artist 3</a>
                            </li>
                        </div>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>Tattoo Artist 4</a>
                            </li>
                        </div>
                        <div>
                            <li className={css.linkcontainer}>
                                <a href="#" className={css.link}>Tattoo Artist 5</a>
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
                <p className={css.bookinginfo}>Bookings Are Through instagram or Whatsapp please Note the info<br/>bla
                    bla bla bla bla bla bla bla bla bla</p>
            </div>
        </div>
    )
}

export default Contact;
