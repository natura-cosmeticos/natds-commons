import { buildConfig } from './buildConfig';
import * as buildReactNativeConfig from '../react-native/buildReactNativeConfig';
import * as buildWebConfig from '../web/buildWebConfig';
import * as buildHtmlConfig from '../html/buildHtmlConfig';
import * as buildAndroidConfig from '../android/buildAndroidConfig';
import * as buildIosConfig from '../ios/buildIosConfig';

const expectedConfig = {
  platforms: {
    android: 'androidConfig',
    html: 'htmlConfig',
    ios: 'iosConfig',
    'react-native': 'reactNativeConfig',
    web: 'webConfig',
  },
  source: [
    'properties/brands/pokemon/pikachu.json',
    'properties/globals/**/*.json',
    'properties/globals/**/!(*.test).js',
    'properties/platforms/ios/*.json',
    'properties/platforms/ios/!(*.test).js',
  ],
};

describe('buildConfig', () => {
  it('should return the global build configuration', () => {
    const buildReactNativeConfigSpy = jest.spyOn(buildReactNativeConfig, 'default').mockImplementation(() => 'reactNativeConfig');
    const buildReactDomConfigSpy = jest.spyOn(buildWebConfig, 'default').mockImplementation(() => 'webConfig');
    const buildHtmlConfigSpy = jest.spyOn(buildHtmlConfig, 'default').mockImplementation(() => 'htmlConfig');
    const buildAndroidConfigSpy = jest.spyOn(buildAndroidConfig, 'default').mockImplementation(() => 'androidConfig');
    const buildIosConfigSpy = jest.spyOn(buildIosConfig, 'default').mockImplementation(() => 'iosConfig');

    const config = buildConfig('pokemon', 'pikachu', 'ios');

    expect(buildReactNativeConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildReactDomConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildHtmlConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildAndroidConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildIosConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(config).toEqual(expectedConfig);
  });
});
