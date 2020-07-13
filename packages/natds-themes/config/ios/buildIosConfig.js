import { capitalizeWord } from '../shared/textHelpers';

const buildIosConfig = (brand, mode) => ({
  buildPath: 'build/ios/',
  files: [
    {
      destination: `Theme${capitalizeWord(brand)}${capitalizeWord(mode)}.swift`,
      format: 'ios-swift/theme.swift',
    },
  ],
  transformGroup: 'ios-swift',
  transforms: ['color/hex', 'attribute/cti', 'name/cti/camel', 'attribute/type', 'value/string-literal'],
});

export default buildIosConfig;
