import buildReactNativeConfig from './react-native/buildReactNativeConfig.js';
import buildHtmlConfig from './html/buildHtmlConfig.js';

const buildConfig = (brand, mode) => ({
  platforms: {
    html: buildHtmlConfig(brand, mode),
    'react-native': buildReactNativeConfig(brand, mode),
  },
  source: [
    `properties/brands/${brand}/${mode}.json`,
  ],
});

export default buildConfig;
