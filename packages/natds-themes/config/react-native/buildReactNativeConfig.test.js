import buildReactNativeConfig from './buildReactNativeConfig';

const expectedConfig = {
  actions: ['create_type_definitions', 'custom_copy_assets'],
  buildPath: 'build/react-native/',
  files: [
    {
      destination: 'pokemon/pikachu.json',
      filter: 'privateProperties',
      format: 'json/nested',
    },
    {
      destination: 'pokemon/pikachu.js',
      filter: 'privateProperties',
      format: 'javascript/module',
    },
    {
      destination: 'spectrum/pokemon/spectrum-pikachu.json',
      filter: 'spectrumProperties',
      format: 'json/nested',
    },
  ],
  transforms: [
    'attribute/cti',
    'name/cti/camel-custom',
    'color/hex',
    'asset/extension',
  ],
};

describe('buildReactNativeConfig', () => {
  it('should return the react native config for the given brand and mode', () => {
    const config = buildReactNativeConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
