import { capitalizeWord } from '../shared/textHelpers';

const colorPaletteProtocolConfig = () => ({
  destination: 'ColorPalette.swift',
  format: 'ios-swift/protocol.swift',
  propertyName: 'color',
  protocolName: 'ColorPalette',
  protocolType: 'String',
});

const colorPaletteStructConfig = (brand, mode) => ({
  destination: `${capitalizeWord(brand)}ColorPalette${capitalizeWord(mode)}.swift`,
  format: 'ios-swift/struct.swift',
  interfaceName: 'ColorPalette',
  propertyName: 'color',
  structName: `${capitalizeWord(brand)}ColorPalette${capitalizeWord(mode)}`,
});

const dynamicColorsConfig = () => ({
  destination: 'DynamicColors.swift',
  format: 'ios-swift/dynamic-colors.swift',
});

const sizesProtocolConfig = () => ({
  destination: 'Sizes.swift',
  format: 'ios-swift/protocol.swift',
  propertyName: 'size',
  protocolName: 'Sizes',
  protocolType: 'CGFloat',
});

const sizeStructConfig = brand => ({
  destination: `${capitalizeWord(brand)}Size.swift`,
  format: 'ios-swift/struct.swift',
  interfaceName: 'Sizes',
  propertyName: 'size',
  structName: `${capitalizeWord(brand)}Size`,
  type: ': CGFloat',
});

const buildFiles = (brand, mode) => ([
  colorPaletteStructConfig(brand, mode),
  sizeStructConfig(brand),
  colorPaletteProtocolConfig(),
  sizesProtocolConfig(),
  dynamicColorsConfig(),
]);

const buildAndroidConfig = (brand, mode) => ({
  buildPath: 'build/ios/',
  files: buildFiles(brand, mode),
  transformGroup: 'ios-swift',
  transforms: ['color/hex'],
});

export default buildAndroidConfig;
