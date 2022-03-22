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
        alternative100: '#252426',
        alternative200: '#918996',
        alternative500: '#4a464f',
        alternative600: '#40143e',
        alternative700: '#7d0b64',
        danger700: '#911a0d',
        danger100: '#24292d', // TOGGLE OFF BG
        danger700: '#bf4c69', // TOGGLE OFF COLOR
        neutral0: '#1f2428', // BACKGROUND SIDEBAR
       // neutral100: '#24292d', // BACKGROUND CONTENT
        neutral100: '#ffffff',  // BACKGROUND CONTENT
        neutral150: '#1f2428', // DISABLED BUTTON BG
        neutral200: '#1e2327', // LINE THROUGH MIDDLE
        neutral500: '#9b9faa', // MENU IDLE COLOR
        neutral600: '#9b9faa', // MENU HOVER COLOR
        neutral700: '#9b9faa', // MENU ACTIVE ICON COLOR
        neutral800: '#74787b', // TITLE COLORS
        neutral900: '#ffffff', // TOOLTIP BG
        primary100: '#ffffff', // MENU ACTIVE BG
        primary200: '#1f2428', // PLUS SIGN BG
        primary500: '#ff99e6', // PRIMARY BUTTON HOVER
        primary600: '#d580ff', // PRIMARY BUTTON COLOR
        primary700: '#ff1aff', // HIGHLIGHT COLOR
        secondary100: '#1f2428', // INFO BOX COLOR
        success100: '#1f2428', // SUCCESS BOX BG
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
