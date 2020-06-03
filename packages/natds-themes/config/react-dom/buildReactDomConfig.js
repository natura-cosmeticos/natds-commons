const isColorToken = token => token.path[0] === 'color';
const isNotColorToken = token => !isColorToken(token);

const buildReactDomConfig = (brand, mode) => ({
  actions: ['create_paths_react_dom'],
  buildPath: `build/react-dom/${brand}/`,
  files: [
    {
      destination: `${mode}.json`,
      format: 'json/flat',
      filter: isColorToken
    },
    {
      destination: 'size.json',
      format: 'json/nested',
      filter: isNotColorToken
    },
  ],
  transformGroup: 'js',
  transforms: ['name/cti/camel'],
});

export default buildReactDomConfig;
