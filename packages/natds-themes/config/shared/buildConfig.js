import buildReactNativeConfig from '../react-native/buildReactNativeConfig';
import buildReactDomConfig from '../react-dom/buildReactDomConfig';
import buildHtmlConfig from '../html/buildHtmlConfig';
import buildAndroidConfig from '../android/buildAndroidConfig';
import builIosConfig from '../ios/buildIosConfig';

export const buildConfig = (brand, mode) => ({
  platforms: {
    android: buildAndroidConfig(brand, mode),
    html: buildHtmlConfig(brand, mode),
    ios: builIosConfig(brand, mode),
    'react-dom': buildReactDomConfig(brand, mode),
    'react-native': buildReactNativeConfig(brand, mode),
  },
  source: [
    `properties/brands/${brand}/${mode}.json`,
  ],
});

export default buildConfig;
