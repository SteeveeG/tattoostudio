import React from 'react';
import css from './TattooArtist.module.css';
import example from '../../Assets/Example.png';
import { useTranslation } from 'react-i18next';

function TattooArtist() {
    const { t } = useTranslation();

    return (
        <div className={css.box}>
            <p className={css.header}>{t("TattooArtists")}</p>
            <div className={css.row}>
                <div className={css.column}>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <p className={css.tattooArtist}>Tattowierer Nummer 2</p>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                </div>

                <div className={css.column}>
                <p className={css.tattooArtist}>Tattowierer Nummer 1</p>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                </div>

                <div className={css.column}>
                <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                </div>

                <div className={css.column}>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic"/>
                    <img src={example} alt="example pic" />
                    <img src={example} alt="example pic" />
                </div>
            </div>
        </div>
    );
}

export default TattooArtist;
