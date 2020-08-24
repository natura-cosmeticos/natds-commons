import buildReactNativeConfig from '../react-native/buildReactNativeConfig';
import buildWebConfig from '../web/buildWebConfig';
import buildHtmlConfig from '../html/buildHtmlConfig';
import buildAndroidConfig from '../android/buildAndroidConfig';
import buildIosConfig from '../ios/buildIosConfig';

export const buildConfig = (brand, mode, platform) => ({
  platforms: {
    android: buildAndroidConfig(brand, mode),
    html: buildHtmlConfig(brand, mode),
    ios: buildIosConfig(brand, mode),
    'react-native': buildReactNativeConfig(brand, mode),
    web: buildWebConfig(brand, mode),
  },
  source: [
    `properties/brands/${brand}/${mode}.json`,
    'properties/globals/**/*.json',
    'properties/globals/**/!(*.test).js',
    `properties/platforms/${platform}/*.json`,
  ],
});

export default buildConfig;
