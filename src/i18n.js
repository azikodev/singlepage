import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home Page": "Home Page",
      "About Page": "About Page",
      "User Data": "User Data"
    }
  },
  // Yana bir til uchun tarjimalarni qo'shing
  // Misol uchun:
  // fr: {
  //   translation: {
  //     "Home Page": "Page d'accueil",
  //     "About Page": "Page À Propos",
  //     "User Data": "Données utilisateur"
  //   }
  // }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
