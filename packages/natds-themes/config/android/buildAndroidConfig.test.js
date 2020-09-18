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
      brandName: 'Pokemon',
      destination: 'theme_pokemon_pikachu.xml',
      format: 'android/themes',
      mode: 'Pikachu',
    },
    {
      destination: 'pikachu.js',
      format: 'javascript/module',
    }
  ],
  transforms: ['name/cti/camel-custom', 'attribute/cti', 'size/dp-custom', 'size/attrType'],
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
