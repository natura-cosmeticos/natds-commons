const buildReactDomConfig = (brand, mode) => ({
  actions: ['create_paths_react_dom'],
  buildPath: `build/react-dom/${brand}/`,
  files: [
    {
      destination: `${mode}.json`,
      format: 'json/flat',
    },
  ],
  transformGroup: 'js',
  transforms: ['name/cti/camel'],
});

export default buildReactDomConfig;
