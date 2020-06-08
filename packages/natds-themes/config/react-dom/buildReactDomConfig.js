const buildReactDomConfig = (brand, mode) => ({
  buildPath: `build/react-dom/${brand}/`,
  files: [
    {
      destination: `${mode}.json`,
      format: 'json/nested',
    },
  ],
  transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex'],
});

export default buildReactDomConfig;
