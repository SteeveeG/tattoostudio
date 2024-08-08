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
import Tattoo13 from '../../Assets/Tattoo13.jpg';
import Tattoo14 from '../../Assets/Tattoo14.jpg';
import Tattoo15 from '../../Assets/Tattoo15.jpg';
import Tattoo16 from '../../Assets/Tattoo16.jpg';
import Tattoowierer from '../../Assets/Tattoowierer.jpg';
import Tattoowierer2 from '../../Assets/Tattoowierer2.jpg';
import Tattoowierer3 from '../../Assets/Tattoowierer3.jpg';
import TattoowiererFrau from '../../Assets/Tattoowiererfrau.jpg';
import TattoowiererFrau2 from '../../Assets/Tattoowiererfrau2.jpg';

import { useTranslation } from 'react-i18next';

function TattooArtist() {
    const { t } = useTranslation();

 
    return (
        <div className={css.box}>
            <p className={css.navigator} id='TattooArtist'></p>
            <p className={css.header}>{t("tattooartists")}</p>
            <div className={css.row}>
                <div className={css.column}>
           
                    <p className={css.tattooartist}>{t("tattooartist")}: samuel</p>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoowierer} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>samuel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo2} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} samuel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo3} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Samuel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo4} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} john</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={css.tattooartist}>{t("tattooartist")}: Emma</p>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={TattoowiererFrau2} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Emma</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo13} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Emma</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.column}>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo16} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Lenni</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={css.tattooartist}>{t("tattooartist")}: Lenni</p>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoowierer2} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Lenni</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo9} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Isabell</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={css.tattooartist}>{t("tattooartist")}: Isabell</p>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={TattoowiererFrau} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Isabell</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo1} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Isabell</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo12} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Emma</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.column}>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo14} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Samuel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo7} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Lenni</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo3} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} John</p>
                                </div>
                            </div>
                        </div>
                    </div>           <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo15} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Isabell</p>
                                </div>
                            </div>
                        </div>
                    </div>           <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo6} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Emma</p>
                                </div>
                            </div>
                        </div>
                    </div>           <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo3} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} John</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.column}>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo11} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Lenni</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo5} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} Isabell</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo6} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} John</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={css.tattooartist}>{t("tattooartist")}: John</p>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoowierer3} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>John</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo8} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} John</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo10} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>{t("workby")} John</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TattooArtist;
