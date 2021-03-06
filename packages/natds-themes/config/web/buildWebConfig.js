export const buildWebConfig = (brand, mode) => ({
  actions: ['create_type_definitions', 'custom_copy_assets'],
  buildPath: 'build/web/',
  files: [
    {
      destination: `spectrum/${brand}/spectrum-${mode}.json`,
      filter: 'spectrumProperties',
      format: 'json/nested',
      options: { showFileHeader: false },
    },
    {
      destination: `${brand}/${mode}.json`,
      filter: 'privateProperties',
      format: 'json/nested',
      options: { showFileHeader: false },
    },
    {
      destination: `${brand}/${mode}.js`,
      filter: 'privateProperties',
      format: 'javascript/es6',
      options: { showFileHeader: false },
    },
    {
      destination: `spectrum/${brand}/spectrum-${mode}.js`,
      filter: 'spectrumProperties',
      format: 'javascript/es6',
      options: { showFileHeader: false },
    },
    {
      destination: `${brand}/${mode}-esm.js`,
      filter: 'privateProperties',
      format: 'javascript/module',
    },
  ],
  transforms: [
    'attribute/cti',
    'name/cti/camel-custom',
    'color/hex',
    'asset/extension',
    'asset/svg-optimized',
    'asset/svg-inline',
  ],
});

export const buildCssConfig = (brand, mode) => ({
  actions: ['custom_copy_assets'],
  buildPath: 'build/web/',
  files: [
    {
      destination: `${brand}/${mode}.css`,
      filter: 'privateProperties',
      format: 'css/variables',
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: `spectrum/${brand}/spectrum-${mode}.css`,
      filter: 'spectrumProperties',
      format: 'css/variables',
      options: {
        showFileHeader: false,
      },
    },
  ],
  transforms: [
    'attribute/cti',
    'name/cti/camel-custom',
    'color/hex',
    'unit/px',
    'asset/extension',
  ],
});
