export const buildWebConfig = (brand, mode) => ({
  buildPath: `build/web/${brand}/`,
  files: [{
    destination: `${mode}.json`,
    format: 'json/nested',
    options: { showFileHeader: false },
  },
  {
    destination: `${mode}.js`,
    format: 'javascript/es6',
    options: { showFileHeader: false },
  }],
  transforms: ['attribute/cti', 'name/cti/camel-custom', 'color/hex'],
});

export const buildCssConfig = (brand, mode) => ({
  buildPath: `build/web/${brand}/`,
  files: [
    {
      destination: `${mode}.css`,
      format: 'css/variables',
      options: {
        showFileHeader: false,
      },
    },
  ],
  transforms: ['attribute/cti', 'name/cti/camel-custom', 'color/hex', 'unit/px'],
});
