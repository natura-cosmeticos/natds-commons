const buildHtmlConfig = (brand, mode) => ({
  actions: ['create_paths_html', 'custom_copy_assets', 'create_type_face'],
  brand,
  buildPath: `build/html/${brand}/`,
  files: [
    {
      destination: `${mode}.html`,
      filter: 'privateProperties',
      format: 'html/colors',
    },
    {
      destination: `spectrum-${mode}.html`,
      filter: 'spectrumProperties',
      format: 'html/spectrum',
    },
  ],
  transformGroup: 'html',
  transforms: [
    'name/cti/camel-custom',
    'asset/extension',
    'asset/svg-optimized',
    'asset/svg-inline',
    'fontFamily/string',
  ],
});

export default buildHtmlConfig;
