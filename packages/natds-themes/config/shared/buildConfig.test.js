import { buildConfig } from './buildConfig';
import buildReactNativeConfig from '../react-native';
import buildWebConfig from '../web';
import buildHtmlConfig from '../html';
import buildCssConfig from '../css';
import buildAndroidConfig from '../android';
import buildIosConfig from '../ios';

const expectedConfig = {
  platforms: {
    android: 'androidConfig',
    css: 'cssConfig',
    html: 'htmlConfig',
    ios: 'iosConfig',
    'react-native': 'reactNativeConfig',
    web: 'webConfig',
  },
  source: [
    'properties/globals/**/!(*light|*dark).json',
    'properties/globals/**/!(*.test|*light|*dark).js',
    'properties/globals/color/pikachu.json',
    'properties/brands/pokemon/pikachu.json',
    'properties/brands/pokemon/spectrum.json',
    'properties/brands/pokemon/spectrum.js',
    'properties/brands/pokemon/typography.json',
    'properties/brands/pokemon/components/*.json',
    'properties/brands/pokemon/asset-pikachu.json',
    'properties/platforms/ios/*.json',
    'properties/platforms/ios/!(*.test).js',
  ],
};

describe('buildConfig', () => {
  it('should return the global build configuration', () => {
    const buildReactNativeConfigSpy = jest.spyOn(buildReactNativeConfig, 'config').mockImplementation(() => 'reactNativeConfig');
    const buildReactDomConfigSpy = jest.spyOn(buildWebConfig, 'config').mockImplementation(() => 'webConfig');
    const buildCssConfigSpy = jest.spyOn(buildCssConfig, 'config').mockImplementation(() => 'cssConfig');
    const buildHtmlConfigSpy = jest.spyOn(buildHtmlConfig, 'config').mockImplementation(() => 'htmlConfig');
    const buildAndroidConfigSpy = jest.spyOn(buildAndroidConfig, 'config').mockImplementation(() => 'androidConfig');
    const buildIosConfigSpy = jest.spyOn(buildIosConfig, 'config').mockImplementation(() => 'iosConfig');

    const config = buildConfig('pokemon', 'pikachu', 'ios');

    expect(buildReactNativeConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildReactDomConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildCssConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildHtmlConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildAndroidConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(buildIosConfigSpy).toHaveBeenCalledWith('pokemon', 'pikachu');
    expect(config).toEqual(expectedConfig);
  });
});
