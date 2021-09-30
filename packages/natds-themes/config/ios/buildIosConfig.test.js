import buildIosConfig from './buildIosConfig';

const expectedConfig = {
  actions: ['custom_copy_assets'],
  buildPath: 'build/ios/',
  files: [
    {
      destination: 'theme/Pokemon/PokemonPikachuTheme.swift',
      filter: 'privateProperties',
      format: 'ios-swift/theme.swift',
      themeName: 'PokemonPikachu',
    },
    {
      destination: 'theme/ThemeProtocol.swift',
      filter: 'privateProperties',
      format: 'ios-swift/theme-protocol.swift',
    },
    {
      destination: 'spectrum/SpectrumProtocol.swift',
      filter: 'spectrumProperties',
      format: 'ios-swift/spectrum-protocol.swift',
    },
    {
      destination: 'spectrum/PokemonSpectrum.swift',
      filter: 'spectrumProperties',
      format: 'ios-swift/spectrum.swift',
      themeName: 'Pokemon',
    },
    {
      destination: 'search/PokemonPikachu.js',
      filter: 'privateProperties',
      format: 'javascript/module',
    },
  ],
  transformGroup: 'ios-swift',
  transforms: [
    'color/hex',
    'attribute/cti',
    'name/cti/camel-custom',
    'attribute/type',
    'value/string-literal',
    'asset/extension',
    'value/font-weight-ios',
  ],
};

describe('buildIosConfig', () => {
  it('should return the ios config for the given brand and mode', () => {
    const config = buildIosConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
