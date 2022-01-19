/* eslint-disable import/no-unresolved */
import aesopDarkTheme from './aesop/dark.json'
import aesopLightTheme from './aesop/light.json'
import avonDarkTheme from './avon/dark.json'
import avonLightTheme from './avon/light.json'
import biomeDarkTheme from './biome/dark.json'
import biomeLightTheme from './biome/light.json'
import naturaDarkTheme from './natura/dark.json'
import naturaLightTheme from './natura/light.json'
import theBodyShopDarkTheme from './theBodyShop/dark.json'
import theBodyShopLightTheme from './theBodyShop/light.json'

const themes = {
  aesop: {
    dark: aesopDarkTheme,
    light: aesopLightTheme
  },
  avon: {
    dark: avonDarkTheme,
    light: avonLightTheme
  },
  biome: {
    dark: biomeDarkTheme,
    light: biomeLightTheme
  },
  natura: {
    dark: naturaDarkTheme,
    light: naturaLightTheme
  },
  theBodyShop: {
    dark: theBodyShopDarkTheme,
    light: theBodyShopLightTheme
  }
}

export default themes
