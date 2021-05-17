import { capitalizeWord } from '../shared/textHelpers';

const buildIosConfig = (brand, mode) => ({
  actions: ['custom_copy_assets'],
  buildPath: 'build/ios/',
  files: [
    {
      destination: `${capitalizeWord(brand)}${capitalizeWord(mode)}Theme.swift`,
      filter: 'privateProperties',
      format: 'ios-swift/theme.swift',
      themeName: `${capitalizeWord(brand)}${capitalizeWord(mode)}`,
    },
    {
      destination: 'ThemeProtocol.swift',
      filter: 'privateProperties',
      format: 'ios-swift/theme-protocol.swift',
    },
    {
      destination: `${capitalizeWord(brand)}${capitalizeWord(mode)}.js`,
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
});

export default buildIosConfig;
