import buildReactDomConfig from './buildReactDomConfig';

const expectedConfig = {
  buildPath: 'build/react-native/pokemon/',
  files: [
    {
      destination: 'pikachu.json',
      format: 'json/nested',
    },
  ],
  transformGroup: 'js',
};

describe('buildReactDomConfig', () => {
  it('should return the react dom config for the given brand and mode', () => {
    const config = buildReactDomConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
