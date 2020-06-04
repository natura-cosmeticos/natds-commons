const buildReactNativeConfig = (brand, mode) => ({
  buildPath: `build/react-native/${brand}/`,
  files: [
    {
      destination: `${mode}.json`,
      format: 'json/nested',
    },
  ],
  transformGroup: 'js',
});

export default buildReactNativeConfig;
