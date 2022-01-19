import { buildAndroidConfig } from './buildAndroidConfig'
import * as helpers from '../shared/helpers'

jest.mock('../shared/helpers')

describe('buildAndroidConfig', () => {
  it('should return the android config for the given brand and mode', () => {
    const expectedConfig = {
      actions: ['create_resources', 'convert_drawables', 'custom_copy_assets'],
      buildPath: 'build/android/',
      files: [
        {
          destination: 'theme/theme_attributes.xml',
          filter: expect.any(Function),
          format: 'android/attributes'
        },
        {
          brandName: 'Pokemon',
          destination: 'theme/theme_pokemon_pikachu_ssot.xml',
          filter: expect.any(Function),
          format: 'android/themes',
          mode: 'Pikachu'
        },
        {
          brandName: 'Pokemon',
          destination: 'spectrum/spectrum_pokemon_ssot.xml',
          filter: 'spectrumProperties',
          format: 'android/spectrum',
          mode: 'Pikachu'
        },
        {
          destination: 'search/pokemon/pikachu.json',
          filter: expect.any(Function),
          format: 'tokenSearch/template'
        }
      ],
      transforms: [
        'name/cti/camel-custom',
        'attribute/cti',
        'size/dp-custom',
        'size/attrType',
        'asset/extension',
        'asset/snake',
        'value/font-weight-android',
        'color/android-alpha'
      ]
    }

    const buildReactNativeConfigSpy = jest
      .spyOn(helpers, 'capitalizeWord')
      .mockImplementation(() => 'Pokemon')
      .mockImplementationOnce(() => 'Pokemon')
      .mockImplementationOnce(() => 'Pikachu')
      .mockImplementationOnce(() => 'Pokemon')
      .mockImplementationOnce(() => 'Pikachu')

    const camelToSnakeCaseSpy = jest
      .spyOn(helpers, 'camelToSnakeCase')
      .mockImplementation(() => 'pokemon')

    const config = buildAndroidConfig('pokemon', 'pikachu')

    expect(config).toMatchObject(expectedConfig)
    expect(buildReactNativeConfigSpy).toHaveBeenNthCalledWith(1, 'pokemon')
    expect(buildReactNativeConfigSpy).toHaveBeenNthCalledWith(2, 'pikachu')
    expect(camelToSnakeCaseSpy).toHaveBeenCalledWith('pokemon')
  })
})
