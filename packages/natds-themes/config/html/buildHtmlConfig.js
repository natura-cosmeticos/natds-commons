const buildHtmlConfig = (brand, mode) => ({
  actions: ['create_paths_html', 'custom_copy_assets'],
  buildPath: `build/html/${brand}/`,
  files: [
    {
      destination: `${mode}.html`,
      filter: 'privateProperties',
      format: 'html/colors',
    },
  ],
  transformGroup: 'html',
  transforms: ['name/cti/camel-custom', 'asset/extension'],
});

export default buildHtmlConfig;
