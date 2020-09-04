// eslint-disable-next-line max-lines-per-function
const buildWebConfig = (brand, mode) => ({
  buildPath: `build/web/${brand}/`,
  files: [
    {
      destination: `${mode}.css`,
      format: 'css/variables',
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: `${mode}.json`,
      format: 'json/nested',
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: `${mode}.js`,
      format: 'javascript/es6',
      options: {
        showFileHeader: false,
      },
    },
  ],
  /**
   * @todo use pixel transformer for sizing/spacing tokens
   */
  transforms: ['attribute/cti', 'name/cti/camel-custom', 'color/hex'],
});

export default buildWebConfig;
