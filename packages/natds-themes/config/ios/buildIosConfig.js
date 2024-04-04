import { capitalizeWord, snakeToCamelCase, excludePrimitiveTokens } from '../shared/helpers'

const buildIosConfig = (brand, mode) => {
  const brandFormated = capitalizeWord(snakeToCamelCase(brand))
  const modeFormated = capitalizeWord(snakeToCamelCase(mode))
  const fileName = `${brandFormated}${modeFormated}`

  return {
    actions: ['custom_copy_assets'],
    buildPath: 'build/ios/',
    files: [
      {
        destination: `theme/${brandFormated}/${fileName}Theme.swift`,
        filter: (token) => excludePrimitiveTokens(token) && 'privateProperties',
        format: 'ios-swift/theme.swift',
        themeName: fileName
      },
      {
        destination: 'theme/ThemeProtocol.swift',
        filter: (token) => excludePrimitiveTokens(token) && 'privateProperties',
        format: 'ios-swift/theme-protocol.swift'
      },
      {
        destination: 'spectrum/SpectrumProtocol.swift',
        filter: 'spectrumProperties',
        format: 'ios-swift/spectrum-protocol.swift'
      },
      {
        destination: `spectrum/${brandFormated}Spectrum.swift`,
        filter: 'spectrumProperties',
        format: 'ios-swift/spectrum.swift',
        themeName: brandFormated
      },
      {
        destination: `search/${brand}/${mode}.json`,
        filter: 'tokenSearchProperties',
        format: 'tokenSearch/template'
      }
    ],
    transformGroup: 'ios-swift',
    transforms: [
      'color/hex',
      'attribute/cti',
      'name/cti/camel-custom',
      'attribute/type',
      'value/string-literal',
      'asset/extension',
      'value/font-weight-ios'
    ]
  }
}

export default buildIosConfig
