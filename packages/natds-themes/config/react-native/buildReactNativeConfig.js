import { filterDeprecatedToken } from '../shared/helpers';

const buildReactNativeConfig = (brand, mode) => ({
  actions: ['create_type_definitions', 'custom_copy_assets'],
  buildPath: 'build/react-native/',
  files: [
    {
      destination: `${brand}/${mode}.json`,
      filter: 'privateProperties',
      format: 'json/nested',
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
    {
      destination: `spectrum/${brand}/spectrum.json`,
      filter: 'spectrumProperties',
      format: 'json/nested',
    },
  ],
  transforms: [
    'attribute/cti',
    'name/cti/camel-custom',
    'color/hex',
    'asset/extension',
    'asset/svg-optimized',
    'asset/svg-inline',
    'asset/svg-fill-to-css',
  ],
});

export default buildReactNativeConfig;
