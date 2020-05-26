import buildReactNativeConfig from './react-native/reactNativeConfig.js';
import buildHtmlConfig from './html/htmlConfig.js';

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
