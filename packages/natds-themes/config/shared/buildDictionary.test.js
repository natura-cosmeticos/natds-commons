import StyleDictionary from 'style-dictionary';
import { customFormats, customActions, customTransforms } from './config';
import { buildDictionary } from './buildDictionary';
import * as buildConfig from './buildConfig';

jest.mock('style-dictionary');

describe('buildDictionary', () => {
  it('should build the config by brand, mode and platform', () => {
    const registerFormatSpy = jest.fn();
    const registerActionSpy = jest.fn();
    const registerTransformSpy = jest.fn();
    const buildPlatformSpy = jest.fn();
    const buildConfigSpy = jest.spyOn(buildConfig, 'buildConfig');

    const mockImplementation = () => ({
      buildPlatform: buildPlatformSpy,
      registerAction: registerActionSpy,
      registerFormat: registerFormatSpy,
      registerTransform: registerTransformSpy,
    });

    StyleDictionary.extend.mockImplementation(mockImplementation);

    buildDictionary('pokemon', 'pikachu', 'ios');

    expect(buildConfigSpy).toBeCalledWith('pokemon', 'pikachu', 'ios');
    expect(buildPlatformSpy).toBeCalledWith('ios');
    expect(registerFormatSpy).toHaveBeenCalledTimes(customFormats.length);
    expect(registerActionSpy).toHaveBeenCalledTimes(customActions.length);
    expect(registerTransformSpy).toHaveBeenCalledTimes(customTransforms.length);
  });
});
