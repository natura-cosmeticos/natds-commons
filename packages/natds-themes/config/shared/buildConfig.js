import reactNative from '../react-native';
import web from '../web';
import html from '../html';
import android from '../android';
import ios from '../ios';
import css from '../css';

export const buildConfig = (brand, mode, platform) => ({
  platforms: {
    android: android.config(brand, mode),
    css: css.config(brand, mode),
    html: html.config(brand, mode),
    ios: ios.config(brand, mode),
    'react-native': reactNative.config(brand, mode),
    web: web.config(brand, mode),
  },
  source: [
    'properties/globals/**/!(*light|*dark).json',
    'properties/globals/**/!(*.test|*light|*dark).js',
    `properties/globals/color/${mode}.json`,
    `properties/brands/${brand}/${mode}.json`,
    `properties/brands/${brand}/spectrum.json`,
    `properties/brands/${brand}/spectrum.js`,
    `properties/brands/${brand}/typography.json`,
    `properties/brands/${brand}/components/*.json`,
    `properties/brands/${brand}/asset-${mode}.json`,
    `properties/platforms/${platform}/*.json`,
    `properties/platforms/${platform}/!(*.test).js`,
  ],
});

export default buildConfig;
