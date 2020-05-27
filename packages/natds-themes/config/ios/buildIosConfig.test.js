import buildIosConfig from './buildIosConfig';

const expectedConfig = {
  buildPath: 'build/ios/',
  files: [
    {
      destination: 'PokemonColorPalettePikachu.swift',
      format: 'ios-swift/struct-colors.swift',
    },
    {
      destination: 'ColorPalette.swift',
      format: 'ios-swift/protocol-colors-palette.swift',
    },
  ],
  transformGroup: 'ios-swift',
  transforms: ['color/hex'],
};

describe('buildIosConfig', () => {
  it('should return the ios config for the given brand and mode', () => {
    const config = buildIosConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
