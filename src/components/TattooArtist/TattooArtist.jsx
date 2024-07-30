import React from 'react';
import css from './TattooArtist.module.css';
import Tattoo1 from '../../Assets/Tattoo1.jpg';
import Tattoo2 from '../../Assets/Tattoo2.jpg';
import Tattoo3 from '../../Assets/Tattoo3.jpg';
import Tattoo4 from '../../Assets/Tattoo4.jpg';
import Tattoo5 from '../../Assets/Tattoo5.jpg';
import Tattoo6 from '../../Assets/Tattoo6.jpg';
import Tattoo7 from '../../Assets/Tattoo7.jpg';
import Tattoo8 from '../../Assets/Tattoo8.jpg';
import Tattoo9 from '../../Assets/Tattoo9.jpg';
import Tattoo10 from '../../Assets/Tattoo10.jpg';
import Tattoo11 from '../../Assets/Tattoo11.jpg';
import Tattoo12 from '../../Assets/Tattoo12.jpg';
import Tattoowierer from '../../Assets/Tattoowierer.jpg';
import TattoowiererFrau from '../../Assets/Tattoowiererfrau.jpg';

import { useTranslation } from 'react-i18next';

function TattooArtist() {
    const { t } = useTranslation();

    return (
        <div className={css.box}>
            <p className={css.header}>{t("tattooartists")}</p>
            <div className={css.row}>
                <div className={css.column}>
                    <p className={css.tattooartist}>Tattowierer Nummer 1</p>
                    <img src={Tattoowierer} alt="example pic"/>
                    <img src={Tattoo2} alt="example pic"/>
                    <img src={Tattoo3} alt="example pic"/>
                    <img src={Tattoo4} alt="example pic"/>
                    <img src={Tattoo5} alt="example pic"/>
                    <img src={Tattoo6} alt="example pic"/>
                </div>

                <div className={css.column}>

                    <img src={Tattoo7} alt="example pic"/>
                    <img src={Tattoo8} alt="example pic"/>
                    <img src={Tattoo9} alt="example pic"/>
                    <p className={css.tattooartist}>Tattowierer Nummer 2</p>
                    <img src={TattoowiererFrau} alt="example pic"/>
                    <img src={Tattoo11} alt="example pic"/>
                    <img src={Tattoo12} alt="example pic"/>
                </div>

                <div className={css.column}>
                    <img src={Tattoo10} alt="example pic"/>
                    <img src={Tattoo10} alt="example pic"/>
                    <img src={Tattoo4} alt="example pic"/>
                    <img src={Tattoo3} alt="example pic"/>
                    <img src={Tattoo2} alt="example pic"/>
                    <img src={Tattoo10} alt="example pic"/>
                </div>

                <div className={css.column}>
                    <img src={Tattoo10} alt="example pic"/>
                    <img src={Tattoo5} alt="example pic"/>
                    <img src={Tattoo6} alt="example pic"/>
                    <img src={Tattoo7} alt="example pic"/>
                    <img src={Tattoo1} alt="example pic" />
                    <img src={Tattoo10} alt="example pic" />
                </div>
            </div>
        </div>
    );
}

export default TattooArtist;
