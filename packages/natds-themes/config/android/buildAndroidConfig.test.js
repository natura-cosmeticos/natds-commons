import buildAndroidConfig from './buildAndroidConfig';
import * as textHelpers from '../shared/textHelpers';

const expectedConfig = {
  buildPath: 'build/android/pokemon/',
  files: [
    {
      destination: 'theme_attributes.xml',
      format: 'android/attributes',
    },
    {
      destination: 'Theme.Pokemon.Pikachu.xml',
      format: 'android/themes',
    },
  ],
  transforms: ['name/cti/camel-custom', 'attribute/cti'],
};

describe('buildAndroidConfig', () => {
  it('should return the android config for the given brand and mode', () => {
    const buildReactNativeConfigSpy = jest
      .spyOn(textHelpers, 'capitalizeWord')
      .mockImplementation(() => 'Pokemon')
      .mockImplementationOnce(() => 'Pokemon')
      .mockImplementationOnce(() => 'Pikachu');

    const config = buildAndroidConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
    expect(buildReactNativeConfigSpy).toHaveBeenNthCalledWith(1, 'pokemon');
    expect(buildReactNativeConfigSpy).toHaveBeenNthCalledWith(2, 'pikachu');
  });
});
