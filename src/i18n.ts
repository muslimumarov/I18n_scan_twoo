
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import UzTranslation from '../public/locales/$LOCALE/$NAMESPACE.json/public/locales/uz/translation.json'
import RuTranslation from '../public/locales/$LOCALE/$NAMESPACE.json/public/locales/ru/translation.json'
import EnTranslation from '../public/locales/$LOCALE/$NAMESPACE.json/public/locales/en/translation.json'
import HttpBackend from 'i18next-http-backend';

i18n
.use(LanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uz',
    debug: true,
    resources: {
        uz:{translation: UzTranslation},
        en:{translation: EnTranslation},
        ru:{translation: RuTranslation}
    },
    interpolation: {
      escapeValue: false, // React uchun xavfsiz
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;