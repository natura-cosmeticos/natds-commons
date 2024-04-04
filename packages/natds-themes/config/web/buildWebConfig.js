import { excludePrimitiveTokens } from '../shared/helpers'

export const buildWebConfig = (brand, mode) => ({
  actions: ['create_type_definitions', 'custom_copy_assets', 'create_type_face'],
  brand,
  buildPath: 'build/web/',
  files: [
    {
      destination: `spectrum/${brand}/spectrum.json`,
      filter: 'spectrumProperties',
      format: 'json/nested',
      options: { showFileHeader: false }
    },
    {
      destination: `${brand}/${mode}.json`,
      filter: (token) => excludePrimitiveTokens(token) && 'privateProperties',
      format: 'json/nested',
      options: { showFileHeader: false }
    },
    {
      destination: `${brand}/${mode}.js`,
      filter: (token) => excludePrimitiveTokens(token) && 'privateProperties',
      format: 'javascript/es6',
      options: { showFileHeader: false }
    },
    {
      destination: `spectrum/${brand}/spectrum.js`,
      filter: 'spectrumProperties',
      format: 'javascript/es6',
      options: { showFileHeader: false }
    },
    {
      destination: `search/${brand}/${mode}.json`,
      filter: 'tokenSearchProperties',
      format: 'tokenSearch/template'
    }
  ],
  transforms: [
    'attribute/cti',
    'name/cti/camel-custom',
    'color/hex',
    'asset/extension',
    'asset/svg-optimized',
    'asset/svg-inline'
  ]
})

export default buildWebConfig
