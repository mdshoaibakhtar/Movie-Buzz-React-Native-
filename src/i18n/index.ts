import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import hi from "./hi.json";

const deviceLanguage = Localization.getLocales()[0]?.languageCode ?? "en";

i18n.use(initReactI18next).init({
  lng: deviceLanguage,
  fallbackLng: "en",
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
