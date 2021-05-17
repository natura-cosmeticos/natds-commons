const buildReactNativeConfig = (brand, mode) => ({
  actions: ['create_type_definitions', 'custom_copy_assets'],
  buildPath: `build/react-native/${brand}/`,
  files: [
    {
      destination: `${mode}.json`,
      filter: 'privateProperties',
      format: 'json/nested',
    },
    {
      destination: `${mode}.js`,
      filter: 'privateProperties',
      format: 'javascript/module',
    },
  ],
  transforms: [
    'attribute/cti',
    'name/cti/pascal',
    'color/hex',
    'name/cti/camel-custom',
    'asset/extension',
  ],
});

export default buildReactNativeConfig;
