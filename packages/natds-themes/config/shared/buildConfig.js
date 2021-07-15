import buildReactNativeConfig from '../react-native/buildReactNativeConfig';
import { buildWebConfig, buildCssConfig } from '../web/buildWebConfig';
import buildHtmlConfig from '../html/buildHtmlConfig';
import buildAndroidConfig from '../android/buildAndroidConfig';
import buildIosConfig from '../ios/buildIosConfig';

export const buildConfig = (brand, mode, platform) => ({
  platforms: {
    android: buildAndroidConfig(brand, mode),
    css: buildCssConfig(brand, mode),
    html: buildHtmlConfig(brand, mode),
    ios: buildIosConfig(brand, mode),
    'react-native': buildReactNativeConfig(brand, mode),
    web: buildWebConfig(brand, mode),
  },
  source: [
    `properties/globals/spectrum/spectrum-${mode}.js`,
    'properties/globals/**/*.json',
    'properties/globals/**/!*(.test|light|dark).js',
    `properties/brands/${brand}/${mode}.json`,
    `properties/brands/${brand}/spectrum-${mode}.json`,
    `properties/brands/${brand}/asset-${mode}.json`,
    `properties/platforms/${platform}/*.json`,
    `properties/platforms/${platform}/!(*.test).js`,
  ],
});

export default buildConfig;
