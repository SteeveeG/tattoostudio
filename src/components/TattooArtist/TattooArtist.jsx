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
            <p className={css.navigator} id='TattooArtist'></p>
            <p className={css.header}>{t("tattooartists")}</p>
            <div className={css.row}>
                <div className={css.column}>
                    <p className={css.tattooartist}>samuel</p>

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
                                    <p className={css.text}>work by samuel</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo3} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo4} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo5} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo6} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.column}>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo7} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo8} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo9} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={css.tattooartist}>Tattowierer Nummer 2</p>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={TattoowiererFrau} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo11} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo12} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.column}>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo2} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo7} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo3} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>           <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo9} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>           <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo6} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>           <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo3} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={css.column}>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo10} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo5} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo6} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo7} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo1} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.container}>
                        <div className={css.wrapper}>
                            <img src={Tattoo10} />
                            <div className={css.description}>
                                <div className={css.textcontainer}>
                                    <p className={css.text}>Tattowierer</p>
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
