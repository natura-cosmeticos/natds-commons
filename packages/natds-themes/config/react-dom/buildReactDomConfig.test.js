import buildReactDomConfig from './buildReactDomConfig';

const expectedConfig = {
  buildPath: 'build/react-dom/pokemon/',
  files: [
    {
      destination: 'pikachu.json',
      format: 'json/nested',
    },
  ],
  transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex'],
};

describe('buildReactDomConfig', () => {
  it('should return the react dom config for the given brand and mode', () => {
    const config = buildReactDomConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
