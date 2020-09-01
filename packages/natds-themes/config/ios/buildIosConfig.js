import { capitalizeWord } from '../shared/textHelpers';

const buildIosConfig = (brand, mode) => ({
  buildPath: 'build/ios/',
  files: [
    {
      destination: `${capitalizeWord(brand)}${capitalizeWord(mode)}Theme.swift`,
      format: 'ios-swift/theme.swift',
    },
    {
      destination: 'ThemeProtocol.swift',
      format: 'ios-swift/theme-protocol.swift',
    },
  ],
  transformGroup: 'ios-swift',
  transforms: ['color/hex', 'attribute/cti', 'name/cti/camel-custom', 'attribute/type', 'value/string-literal'],
});

export default buildIosConfig;
