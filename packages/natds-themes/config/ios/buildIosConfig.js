import { capitalizeWord } from '../shared/textHelpers';

const buildFiles = (brand, mode) => ([
  {
    destination: `${capitalizeWord(brand)}ColorPalette${capitalizeWord(mode)}.swift`,
    format: 'ios-swift/struct-colors.swift',
  },
  {
    destination: 'ColorPalette.swift',
    format: 'ios-swift/protocol-colors-palette.swift',
  },
  {
    destination: 'DynamicColors.swift',
    format: 'ios-swift/dynamic-colors.swift',
  },
]);

const buildAndroidConfig = (brand, mode) => ({
  buildPath: 'build/ios/',
  files: buildFiles(brand, mode),
  transformGroup: 'ios-swift',
  transforms: ['color/hex'],
});

export default buildAndroidConfig;
