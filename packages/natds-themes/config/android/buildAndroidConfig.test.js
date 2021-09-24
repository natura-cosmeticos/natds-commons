import buildAndroidConfig from './buildAndroidConfig';
import * as textHelpers from '../shared/helpers';

jest.mock('../shared/helpers');

const expectedConfig = {
  actions: ['create_resources', 'custom_copy_assets'],
  buildPath: 'build/android/',
  files: [
    {
      destination: 'pokemon/theme_attributes.xml',
      filter: 'privateProperties',
      format: 'android/attributes',
    },
    {
      brandName: 'Pokemon',
      destination: 'pokemon/theme_pokemon_pikachu.xml',
      filter: 'privateProperties',
      format: 'android/themes',
      mode: 'Pikachu',
    },
    {
      brandName: 'Pokemon',
      destination: 'spectrum/pokemon/spectrum_pokemon.xml',
      filter: 'spectrumProperties',
      format: 'android/spectrum',
      mode: 'Pikachu',
    },
    {
      destination: 'pokemon/pikachu.js',
      filter: 'privateProperties',
      format: 'javascript/module',
    },
  ],
  transforms: [
    'name/cti/camel-custom',
    'attribute/cti',
    'size/dp-custom',
    'size/attrType',
    'asset/extension',
    'asset/snake',
    'value/font-weight-android',
    'color/android-alpha',
  ],
};

describe('buildAndroidConfig', () => {
  it('should return the android config for the given brand and mode', () => {
    const buildReactNativeConfigSpy = jest
      .spyOn(textHelpers, 'capitalizeWord')
      .mockImplementation(() => 'Pokemon')
      .mockImplementationOnce(() => 'Pokemon')
      .mockImplementationOnce(() => 'Pikachu')
      .mockImplementationOnce(() => 'Pokemon')
      .mockImplementationOnce(() => 'Pikachu');

    const config = buildAndroidConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
    expect(buildReactNativeConfigSpy).toHaveBeenNthCalledWith(1, 'pokemon');
    expect(buildReactNativeConfigSpy).toHaveBeenNthCalledWith(2, 'pikachu');
  });
});
