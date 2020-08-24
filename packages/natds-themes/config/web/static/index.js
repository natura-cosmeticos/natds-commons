/* eslint-disable import/no-unresolved */
import avonDarkTheme from './avon/dark.json';
import avonLightTheme from './avon/light.json';
import naturaDarkTheme from './natura/dark.json';
import naturaLightTheme from './natura/light.json';
import theBodyShopDarkTheme from './theBodyShop/dark.json';
import theBodyShopLightTheme from './theBodyShop/light.json';

// @todo generate type definitions
const themes = {
  avon: {
    dark: avonDarkTheme,
    light: avonLightTheme,
  },
  natura: {
    dark: naturaDarkTheme,
    light: naturaLightTheme,
  },
  theBodyShop: {
    dark: theBodyShopDarkTheme,
    light: theBodyShopLightTheme,
  },
};

export default themes;
