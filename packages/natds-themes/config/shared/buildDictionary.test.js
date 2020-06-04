import StyleDictionary from 'style-dictionary';
import { customFormats, customActions } from './config';
import { buildDictionary } from './buildDictionary';
import * as buildConfig from './buildConfig';

jest.mock('style-dictionary');

describe('buildDictionary', () => {
  it('should build the config by brand, mode and platform', () => {
    console.log = jest.fn();

    const registerFormatSpy = jest.fn();
    const registerActionSpy = jest.fn();
    const buildPlatformSpy = jest.fn();
    const buildConfigSpy = jest.spyOn(buildConfig, 'buildConfig');

    const mockImplementation = () => ({
      buildPlatform: buildPlatformSpy,
      registerAction: registerActionSpy,
      registerFormat: registerFormatSpy,
    });

    StyleDictionary.extend.mockImplementation(mockImplementation);

    buildDictionary('pokemon', 'pikachu', 'ios');

    expect(buildConfigSpy).toBeCalledWith('pokemon', 'pikachu');
    expect(buildPlatformSpy).toBeCalledWith('ios');
    expect(registerFormatSpy).toHaveBeenCalledTimes(customFormats.length);
    expect(registerActionSpy).toHaveBeenCalledTimes(customActions.length);
  });
});
