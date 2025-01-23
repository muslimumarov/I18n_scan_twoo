import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const  changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="uz">O‘zbek</option>
      </select>
    </div>
  );
};

export default App;