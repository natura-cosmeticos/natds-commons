const buildReactNativeConfig = (brand, mode) => ({
  buildPath: `build/react-native/${brand}/`,
  files: [
    {
      destination: `${mode}.json`,
      format: 'json/nested',
    },
  ],
  transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex'],
  actions: ['copy_assets']
});

export default buildReactNativeConfig;
