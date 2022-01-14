import { capitalizeWord, filterDeprecatedToken } from '../shared/helpers';

const buildIosConfig = (brand, mode) => ({
  actions: ['custom_copy_assets'],
  buildPath: 'build/ios/',
  files: [
    {
      destination: `theme/${capitalizeWord(brand)}/${capitalizeWord(brand)}${capitalizeWord(mode)}Theme.swift`,
      filter: 'privateProperties',
      format: 'ios-swift/theme.swift',
      themeName: `${capitalizeWord(brand)}${capitalizeWord(mode)}`,
    },
    {
      destination: 'theme/ThemeProtocol.swift',
      filter: 'privateProperties',
      format: 'ios-swift/theme-protocol.swift',
    },
    {
      destination: 'spectrum/SpectrumProtocol.swift',
      filter: 'spectrumProperties',
      format: 'ios-swift/spectrum-protocol.swift',
    },
    {
      destination: `spectrum/${capitalizeWord(brand)}Spectrum.swift`,
      filter: 'spectrumProperties',
      format: 'ios-swift/spectrum.swift',
      themeName: `${capitalizeWord(brand)}`,
    },
    {
      destination: `search/${brand}/${mode}.json`,
      filter: 'tokenSearchProperties',
      format: 'json/flat',
    },
    {
      destination: `search/${brand}/${mode}-deprecated.json`,
      filter: filterDeprecatedToken,
      format: 'json/flat',
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
    'value/font-weight-ios',
  ],
});

export default buildIosConfig;
