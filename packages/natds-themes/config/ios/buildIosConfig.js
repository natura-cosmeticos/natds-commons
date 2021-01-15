import { capitalizeWord } from '../shared/textHelpers';
import { isProp } from '../shared/helpers';

const buildIosConfig = (brand, mode) => ({
  buildPath: 'build/ios/',
  files: [
    {
      destination: `${capitalizeWord(brand)}${capitalizeWord(mode)}Theme.swift`,
      filter: (prop) => (!isProp(prop, 'platform')),
      format: 'ios-swift/theme.swift',
      themeName: `${capitalizeWord(brand)}${capitalizeWord(mode)}`,
    },
    {
      destination: 'ThemeProtocol.swift',
      filter: (prop) => (!isProp(prop, 'platform')),
      format: 'ios-swift/theme-protocol.swift',
    },
    {
      destination: `${capitalizeWord(brand)}${capitalizeWord(mode)}.js`,
      filter: (prop) => (!isProp(prop, 'platform')),
      format: 'javascript/module',
    },
  ],
  transformGroup: 'ios-swift',
  transforms: ['color/hex', 'attribute/cti', 'name/cti/camel-custom', 'attribute/type', 'value/string-literal'],
});

export default buildIosConfig;
