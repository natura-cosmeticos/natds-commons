import { excludePrimitiveTokens } from '../shared/helpers'

const buildReactNativeConfig = (brand, mode) => ({
  actions: ['create_type_definitions', 'custom_copy_assets'],
  buildPath: 'build/react-native/',
  files: [
    {
      destination: `${brand}/${mode}.json`,
      filter: (token) => excludePrimitiveTokens(token) && 'privateProperties',
      format: 'json/nested'
    },
    {
      destination: `search/${brand}/${mode}.json`,
      filter: 'tokenSearchProperties',
      format: 'tokenSearch/template'
    },
    {
      destination: `spectrum/${brand}/spectrum.json`,
      filter: 'spectrumProperties',
      format: 'json/nested'
    }
  ],
  transforms: [
    'attribute/cti',
    'name/cti/camel-custom',
    'color/hex',
    'asset/extension',
    'asset/svg-optimized',
    'asset/svg-inline',
    'asset/svg-fill-to-css'
  ]
})

export default buildReactNativeConfig
