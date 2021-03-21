const withManifest = require('next-manifest');
const langConfig = require('./lang-config');

const i18n = {
  defaultLocale: langConfig.find(({ isDefault }) => isDefault)?.code || 'pt-pt',
  locales: langConfig.map(({ code }) => code)
};

const manifest = {
  background_color: '#ffffff',
  display: 'standalone',
  icons: [
    {
      sizes: '192x192',
      src: '/images/android-chrome-192x192.png',
      type: 'images/png'
    },
    {
      sizes: '512x512',
      src: '/images/android-chrome-512x512.png',
      type: 'images/png'
    }
  ],
  name: 'name',
  output: './public/',
  short_name: 'short-name',
  start_url: '/',
  theme_color: '#000000'
};

const config = withManifest({ i18n, manifest });

module.exports = config;
