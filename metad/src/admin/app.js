import AuthLogo from './extensions/logo.png';
import MenuLogo from './extensions/menu.png';
import favicon from './extensions/favicon.ico';

//https://github.com/boazpoolman/strapi-code-themes/blob/master/themes/github-dark-mode.js

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['pt_BR', 'es'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {

      },
    },
    // Extend the translations
    translations: {
      fr: {
        'Auth.form.email.label': 'test',
        Users: 'Utilisateurs',
        City: 'CITY (FRENCH)',
        // Customize the label of the Content Manager table.
        Id: 'ID french',
      },
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};
