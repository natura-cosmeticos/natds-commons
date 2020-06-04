import buildReactDomConfig from './buildReactDomConfig';

const expectedConfig = {
  actions: ['create_paths_react_dom'],
  buildPath: 'build/react-dom/pokemon/',
  files: [
    {
      destination: 'pikachu.json',
      format: 'json/flat',
    },
  ],
  transformGroup: 'js',
  transforms: ['name/cti/camel'],
};

describe('buildReactDomConfig', () => {
  it('should return the react dom config for the given brand and mode', () => {
    const config = buildReactDomConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
