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
                    Please Note Before Contacting us we need:<br/>
                    Your Full Age a Description of your Idea as precise as you can,<br/>
                    and if you can, send some inspirations pictures,<br/>
                    the approxomate desired size of the Tattoo,<br/>
                    wich Body youre considering (Photo),<br/>
                    When Youre Most Available<br/>
                </p>
                <div>
                    <ul>
                        <li className={css.tattooartistlink}><a href="#">Tattoo Artist 1</a></li>
                        <li className={css.tattooartistlink}><a href="#">Tattoo Artist 2</a></li>
                        <li className={css.tattooartistlink}><a href="#">Tattoo Artist 3</a></li>
                        <li className={css.tattooartistlink}><a href="#">Tattoo Artist 4</a></li>
                        <li className={css.tattooartistlink}><a href="#">Tattoo Artist 5</a></li>
                        <li className={css.tattooartistlink}><a href="#">Whats App</a></li>
                    </ul>
                </div>
            </div>
            <div className={css.BookingInfo}>
            <p>Bookings Are Through instagram or Whatsapp please Note the info<br/>bla bla bla bla bla bla bla bla bla bla</p>
            </div>
        </div>
    )
}

export default Contact;
