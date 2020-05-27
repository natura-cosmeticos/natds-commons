import { capitalizeWord } from '../shared/textHelpers';

const buildAndroidConfig = (brand, mode) => ({
  buildPath: `build/ios/${brand}/`,
  files: [
    {
      destination: `${capitalizeWord(brand)}ColorPalette${capitalizeWord(mode)}.swift`,
      format: 'ios-swift/struct-colors.swift',
    },
  ],
  transformGroup: 'ios-swift',
  transforms: ['color/hex'],
});

export default buildAndroidConfig;
