import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
     "tattoostudioname":"your tattoo studio",
     "tattooartists":"tattoo artists",
     "contact":"contact",
     "location":"location",
     "quote":"Where the ink meets the soul , art is born." ,
     "adress":"adress",
     "applemaps":"apple maps",
     "googlemaps":"google maps",
     "openinghoursheader":"opening hours",
     "openingdays":"mon - sat",
     "openinghours":"11:00 to 18:00",
     "bookinginfo":"Bookings do not exist. This is not a real Tattoo Studio website :)",
     "contactinfo":"Please note, this is not a real tattoo studio; it's just a learning project and doesn't exist. However, if you liked it, please check out my GitHub or my Website <3",

      "tattooartist":"Tattoo Artist",
       "workby":"Work By"
    },
  },
  de: {
    translation: {
     "tattoostudioname":"dein Tattoo Studio",
     "tattooartists":"Tattoo-Künstler",
     "location":"Standort",
     "quote":"Wo die Tinte auf die Seele trifft, wird Kunst geboren.",
     "adress":"adresse",
     "applemaps":"apple karten",
     "googlemaps":"google karten",
     "openinghoursheader":"öffnungszeiten",
     "openingdays":"mon - sam",
     "openinghours":"11:00 bis 18:00",
     "contact":"Kontakt",
     "bookinginfo":"Buchungen existieren nicht. Dies ist keine echte Tattoo Studio Website :)",
     "contactinfo":"Bitte beachten Sie, dies ist kein echtes Tattoostudio; es handelt sich lediglich um ein Lernprojekt und existiert nicht. Wenn es Ihnen jedoch gefallen hat, besuchen Sie bitte mein GitHub oder meine Website <3",

     "tattooartist":"Tattoo Künstler",
     "workby":"Gestochen von"


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