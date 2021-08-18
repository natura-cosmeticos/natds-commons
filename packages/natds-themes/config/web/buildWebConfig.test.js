import { buildWebConfig } from './buildWebConfig';

const expectedWebConfig = {
  actions: ['create_type_definitions', 'custom_copy_assets', 'create_type_face'],
  brand: 'pokemon',
  buildPath: 'build/web/',
  files: [
    {
      destination: 'spectrum/pokemon/spectrum-pikachu.json',
      filter: 'spectrumProperties',
      format: 'json/nested',
      options: { showFileHeader: false },
    },
    {
      destination: 'pokemon/pikachu.json',
      filter: 'privateProperties',
      format: 'json/nested',
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: 'pokemon/pikachu.js',
      filter: 'privateProperties',
      format: 'javascript/es6',
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: 'spectrum/pokemon/spectrum-pikachu.js',
      filter: 'spectrumProperties',
      format: 'javascript/es6',
      options: { showFileHeader: false },
    },
    {
      destination: 'pokemon/pikachu-esm.js',
      filter: 'privateProperties',
      format: 'javascript/module',
    },
  ],
  transforms: [
    'attribute/cti',
    'name/cti/camel-custom',
    'color/hex',
    'asset/extension',
    'asset/svg-optimized',
    'asset/svg-inline',
  ],
};

describe('buildWebConfig', () => {
  it('should return the react dom config for the given brand and mode', () => {
    const config = buildWebConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedWebConfig);
  });
});
