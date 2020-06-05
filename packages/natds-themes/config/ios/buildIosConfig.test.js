import buildIosConfig from './buildIosConfig';

const expectedConfig = {
  buildPath: 'build/ios/',
  files: [
    {
      destination: 'PokemonColorPalettePikachu.swift',
      format: 'ios-swift/struct.swift',
      interfaceName: 'ColorPalette',
      propertyName: 'color',
      structName: 'PokemonColorPalettePikachu',
    },
    {
      destination: 'PokemonSizes.swift',
      format: 'ios-swift/struct.swift',
      interfaceName: 'Sizes',
      propertyName: 'size',
      structName: 'PokemonSizes',
      type: ': CGFloat',
    },
    {
      destination: 'ColorPalette.swift',
      format: 'ios-swift/protocol.swift',
      propertyName: 'color',
      protocolName: 'ColorPalette',
      protocolType: 'String',
    },
    {
      destination: 'Sizes.swift',
      format: 'ios-swift/protocol.swift',
      propertyName: 'size',
      protocolName: 'Sizes',
      protocolType: 'CGFloat',
    },
    {
      destination: 'DynamicColors.swift',
      format: 'ios-swift/dynamic-colors.swift',
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
