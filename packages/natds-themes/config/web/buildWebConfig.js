// eslint-disable-next-line max-lines-per-function
const buildWebConfig = (brand, mode) => ({
  buildPath: `build/web/${brand}/`,
  files: [
    {
      destination: `${mode}.css`,
      format: 'css/variables',
    },
    {
      destination: `${mode}.json`,
      format: 'json/nested',
    },
    {
      destination: `${mode}.js`,
      format: 'javascript/es6',
    },
  ],
  /**
   * @todo use pixel transformer for sizing/spacing tokens
   */
  transforms: ['attribute/cti', 'name/cti/camel', 'color/hex'],
});

export default buildWebConfig;
