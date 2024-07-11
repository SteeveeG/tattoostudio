import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
     "TattooStudioName":"your tattoo studio",
     "TattooArtists":"tattoo artists",
     "Contact":"contact",
     "Location":"location",

     "Quote":"Where the ink meets the soul, art is born." ,
 
    },
  },
  de: {
    translation: {
     "TattooStudioName":"dein Tattoo Studio",
     "TattooArtists":"Tattoo-Künstler",
     "Contact":"Kontakt",
     "Location":"Standort",   
     "Quote":"Wo die Tinte auf die Seele trifft, wird Kunst geboren.",
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