import { buildConfig } from './buildConfig';
import * as buildReactNativeConfig from '../react-native/buildReactNativeConfig';
import * as buildReactDomConfig from '../react-dom/buildReactDomConfig';
import * as buildHtmlConfig from '../html/buildHtmlConfig';
import * as buildAndroidConfig from '../android/buildAndroidConfig';
import * as buildIosConfig from '../ios/buildIosConfig';

const expecteConfig = {
  platforms: {
    android: 'androidConfig',
    html: 'htmlConfig',
    ios: 'iosConfig',
    'react-dom': 'reactDomConfig',
    'react-native': 'reactNativeConfig',
  },
  source: [
    'properties/brands/pokemon/pikachu.json',
    'properties/globals/**/*.json',
  ],
};

describe('buildConfig', () => {
  it('should return the global build configuration', () => {
    const buildReactNativeConfigSpy = jest.spyOn(buildReactNativeConfig, 'default').mockImplementation(() => 'reactNativeConfig');
    const buildReactDomConfigSpy = jest.spyOn(buildReactDomConfig, 'default').mockImplementation(() => 'reactDomConfig');
    const buildHtmlConfigSpy = jest.spyOn(buildHtmlConfig, 'default').mockImplementation(() => 'htmlConfig');
    const buildAndroidConfigSpy = jest.spyOn(buildAndroidConfig, 'default').mockImplementation(() => 'androidConfig');
    const buildIosConfigSpy = jest.spyOn(buildIosConfig, 'default').mockImplementation(() => 'iosConfig');

    const config = buildConfig('pokemon', 'pikachu');

    expect(buildReactNativeConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildReactDomConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildHtmlConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildAndroidConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildIosConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(config).toEqual(expecteConfig);
  });
});
