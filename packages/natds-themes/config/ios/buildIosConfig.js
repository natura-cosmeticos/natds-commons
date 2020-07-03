import { capitalizeWord } from '../shared/textHelpers';
import { filterCategory } from '../shared/filters';

const colorPaletteProtocolConfig = () => ({
  destination: 'ColorPalette.swift',
  filter: (dictionary) => filterCategory(dictionary, 'color'),
  format: 'ios-swift/protocol.swift',
  propertyName: 'color',
  protocolName: 'ColorPalette',
  protocolType: 'String',
});

const colorPaletteStructConfig = (brand, mode) => ({
  destination: `${capitalizeWord(brand)}ColorPalette${capitalizeWord(mode)}.swift`,
  filter: (dictionary) => filterCategory(dictionary, 'color'),
  format: 'ios-swift/struct.swift',
  interfaceName: 'ColorPalette',
  propertyName: 'color',
  structName: `${capitalizeWord(brand)}ColorPalette${capitalizeWord(mode)}`,
});

const dynamicColorsConfig = () => ({
  destination: 'DynamicColors.swift',
  filter: (dictionary) => filterCategory(dictionary, 'color'),
  format: 'ios-swift/dynamic-colors.swift',
});

const sizesProtocolConfig = () => ({
  destination: 'Sizes.swift',
  filter: (dictionary) => filterCategory(dictionary, 'size'),
  format: 'ios-swift/protocol.swift',
  propertyName: 'size',
  protocolName: 'Sizes',
  protocolType: 'CGFloat',
});

const sizeStructConfig = (brand) => ({
  destination: `${capitalizeWord(brand)}Sizes.swift`,
  filter: (dictionary) => filterCategory(dictionary, 'size'),
  format: 'ios-swift/struct.swift',
  interfaceName: 'Sizes',
  propertyName: 'size',
  structName: `${capitalizeWord(brand)}Sizes`,
  type: ': CGFloat',
});

const spacingProtocolConfig = () => ({
  destination: 'Spacings.swift',
  filter: (dictionary) => filterCategory(dictionary, 'spacing'),
  format: 'ios-swift/protocol.swift',
  propertyName: 'spacing',
  protocolName: 'Spacing',
  protocolType: 'CGFloat',
});

const spacingStructConfig = (brand) => ({
  destination: `${capitalizeWord(brand)}Spacings.swift`,
  filter: (dictionary) => filterCategory(dictionary, 'spacing'),
  format: 'ios-swift/struct.swift',
  interfaceName: 'Spacings',
  propertyName: 'spacing',
  structName: `${capitalizeWord(brand)}Spacings`,
  type: ': CGFloat',
});

const buildFiles = (brand, mode) => ([
  colorPaletteStructConfig(brand, mode),
  colorPaletteProtocolConfig(),
  dynamicColorsConfig(),
  sizeStructConfig(brand),
  sizesProtocolConfig(),
  spacingStructConfig(brand),
  spacingProtocolConfig(),
]);

const buildAndroidConfig = (brand, mode) => ({
  buildPath: 'build/ios/',
  files: buildFiles(brand, mode),
  transformGroup: 'ios-swift',
  transforms: ['color/hex', 'attribute/cti'],
});

export default buildAndroidConfig;
