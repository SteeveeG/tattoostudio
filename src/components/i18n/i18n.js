import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
     "tattoostudioname":"your tattoo studio",
     "tattooartists":"tattoo artists",
     "contact":"contact",
     "location":"location",
     "quote":"Where the ink meets the soul, art is born." ,
 
    },
  },
  de: {
    translation: {
     "tattoostudioname":"dein Tattoo Studio",
     "tattooartists":"Tattoo-Künstler",
     "contact":"Kontakt",
     "location":"Standort",
     "quote":"Wo die Tinte auf die Seele trifft, wird Kunst geboren.",
    },
  },
};

i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "en",
      interpolation: {
        escapeValue: false,
      },
    });

export default i18n;