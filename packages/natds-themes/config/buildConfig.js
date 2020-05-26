import buildReactNativeConfig from './react-native/buildReactNativeConfig';
import buildHtmlConfig from './html/buildHtmlConfig';
import buildAndroidConfig from './android/buildAndroidConfig';

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
