module.exports = {
  input: [
    'src/**/*.{js,jsx,ts,tsx}', // Tarjima kalitlari qayerdan izlanadi
  ],
  output: './public/locales/$LOCALE/$NAMESPACE.json', // JSON tarjima fayllari uchun joy
  options: {
    func: {
      list: ['t'], // Tarjima funksiyasining nomi
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    lngs: ['en', 'uz', 'ru'], // Tillar ro‘yxati
    defaultLng: 'en',
    defaultNs: 'translation',
    resource: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
      savePath: './public/locales/{{lng}}/{{ns}}.json',
    },
    keySeparator: false,
    nsSeparator: false,
  },
};
