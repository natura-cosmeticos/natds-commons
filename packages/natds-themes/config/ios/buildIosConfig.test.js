import buildIosConfig from './buildIosConfig';

const expectedConfig = {
  actions: ['custom_copy_assets'],
  buildPath: 'build/ios/',
  files: [
    {
      destination: 'PokemonPikachuTheme.swift',
      filter: 'privateProperties',
      format: 'ios-swift/theme.swift',
      themeName: 'PokemonPikachu',
    },
    {
      destination: 'ThemeProtocol.swift',
      filter: 'privateProperties',
      format: 'ios-swift/theme-protocol.swift',
    },
    {
      destination: '/spectrum/SpectrumProtocol.swift',
      filter: 'spectrumProperties',
      format: 'ios-swift/spectrum-protocol.swift',
    },
    {
      destination: '/spectrum/PokemonPikachuSpectrum.swift',
      filter: 'spectrumProperties',
      format: 'ios-swift/spectrum.swift',
      themeName: 'PokemonPikachu',
    },
    {
      destination: 'PokemonPikachu.js',
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
  ],
};

describe('buildIosConfig', () => {
  it('should return the ios config for the given brand and mode', () => {
    const config = buildIosConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
