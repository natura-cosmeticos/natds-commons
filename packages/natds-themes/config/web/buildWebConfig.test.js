import { buildCssConfig, buildWebConfig } from './buildWebConfig';

const expectedWebConfig = {
  buildPath: 'build/web/pokemon/',
  files: [
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

const expectedCssConfig = {
  buildPath: 'build/web/pokemon/',
  files: [
    {
      destination: 'pikachu.css',
      format: 'css/variables',
      options: {
        showFileHeader: false,
      },
    },
  ],
  transforms: ['attribute/cti', 'name/cti/camel-custom', 'color/hex', 'unit/px'],
};

describe('buildReactDomConfig', () => {
  describe('buildWebConfig', () => {
    it('should return the react dom config for the given brand and mode', () => {
      const config = buildWebConfig('pokemon', 'pikachu');

      expect(config).toEqual(expectedWebConfig);
    });
  });

  describe('buildCssConfig', () => {
    it('should return the css config for the given brand and mode', () => {
      const config = buildCssConfig('pokemon', 'pikachu');

      expect(config).toEqual(expectedCssConfig);
    });
  });
});
