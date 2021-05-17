export const buildWebConfig = (brand, mode) => ({
  actions: ['create_type_definitions', 'custom_copy_assets'],
  buildPath: `build/web/${brand}/`,
  files: [{
    destination: `${mode}.json`,
    filter: 'privateProperties',
    format: 'json/nested',
    options: { showFileHeader: false },
  },
  {
    destination: `${mode}.js`,
    filter: 'privateProperties',
    format: 'javascript/es6',
    options: { showFileHeader: false },
  },
  {
    destination: `${mode}-esm.js`,
    filter: 'privateProperties',
    format: 'javascript/module',
  },
  ],
  transforms: [
    'attribute/cti',
    'name/cti/camel-custom',
    'color/hex',
    'asset/extension',
  ],
});

export const buildCssConfig = (brand, mode) => ({
  actions: ['custom_copy_assets'],
  buildPath: `build/web/${brand}/`,
  files: [
    {
      destination: `${mode}.css`,
      filter: 'privateProperties',
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
