const buildReactNativeConfig = (brand, mode) => ({
  buildPath: `build/react-native/${brand}/`,
  files: [
    {
      destination: `${mode}.json`,
      format: 'json/nested',
    },
  ],
  transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex'],
});

export default buildReactNativeConfig;
