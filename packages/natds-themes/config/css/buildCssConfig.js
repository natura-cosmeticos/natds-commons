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
      destination: `spectrum/${brand}/spectrum.css`,
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
    'fontFamily/string',
  ],
});

export default buildCssConfig;
