/* eslint-disable max-lines */

import buildIosConfig from './buildIosConfig';

const expectedConfig = {
  buildPath: 'build/ios/',
  files: [
    {
      destination: 'PokemonPikachuTheme.swift',
      format: 'ios-swift/theme.swift',
      themeName: 'PokemonPikachu',
    },
    {
      destination: 'ThemeProtocol.swift',
      format: 'ios-swift/theme-protocol.swift',
    },
    {
      destination: 'PokemonPikachu.js',
      format: 'javascript/module',
    },
  ],
  transformGroup: 'ios-swift',
  transforms: ['color/hex', 'attribute/cti', 'name/cti/camel-custom', 'attribute/type', 'value/string-literal'],
};

describe('buildIosConfig', () => {
  it('should return the ios config for the given brand and mode', () => {
    const config = buildIosConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
