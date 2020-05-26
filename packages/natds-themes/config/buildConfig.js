import buildReactNativeConfig from './react-native/buildReactNativeConfig.js';
import buildHtmlConfig from './html/buildHtmlConfig.js';
import buildAndroidConfig from './android/buildAndroidConfig.js';

const buildConfig = (brand, mode) => ({
  platforms: {
    android: buildAndroidConfig(brand, mode),
    html: buildHtmlConfig(brand, mode),
    'react-native': buildReactNativeConfig(brand, mode),
  },
  source: [
    `properties/brands/${brand}/${mode}.json`,
  ],
});

export default buildConfig;
