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
     "bookinginfo":"Bookings Are Through instagram or Whatsapp please Note the info that it can take a few days for an answer :)",
     "contactinfo":"Please Note Before Contacting us we need: Your Full Age a Description of your Idea as precise as you can, and if you can, send some inspirations pictures, the approxomate desired size of the Tattoo, wich Body youre considering (Photo),  When Youre Most Available",

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
     "bookinginfo":"Buchungen sind über Instagram oder Whatsapp Bitte beachten Sie die Info, dass es ein paar Tage für eine Antwort dauern kann :)",
     "contactinfo":"Bitte beachten Sie: Bevor Sie uns kontaktieren, benötigen wir: Ihr volles Alter eine Beschreibung Ihrer Idee so genau wie möglich, und wenn Sie können, senden Sie uns einige Inspirationsbilder, die ungefähre gewünschte Größe des Tattoos, welchen Körper Sie in Betracht ziehen (Foto), Wann du am besten verfügbar bist"
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