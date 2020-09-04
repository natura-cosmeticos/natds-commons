import buildWebJsonConfig from './buildWebConfig';

const expectedConfig = {
  buildPath: 'build/web/pokemon/',
  files: [
    {
      destination: 'pikachu.css',
      format: 'css/variables',
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: 'pikachu.json',
      format: 'json/nested',
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: 'pikachu.js',
      format: 'javascript/es6',
      options: {
        showFileHeader: false,
      },
    },
  ],
  transforms: ['attribute/cti', 'name/cti/camel-custom', 'color/hex'],
};

describe('buildReactDomConfig', () => {
  it('should return the react dom config for the given brand and mode', () => {
    const config = buildWebJsonConfig('pokemon', 'pikachu');

    expect(config).toEqual(expectedConfig);
  });
});
