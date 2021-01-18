import { buildCssConfig, buildWebConfig } from './buildWebConfig';

const expectedWebConfig = {
  actions: ['create_type_definitions'],
  buildPath: 'build/web/pokemon/',
  files: [
    {
      destination: 'pikachu.json',
      filter: 'privateProperties',
      format: 'json/nested',
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: 'pikachu.js',
      filter: 'privateProperties',
      format: 'javascript/es6',
      options: {
        showFileHeader: false,
      },
    },
    {
      destination: 'pikachu-esm.js',
      filter: 'privateProperties',
      format: 'javascript/module',
    },
  ],
  transforms: ['attribute/cti', 'name/cti/camel-custom', 'color/hex'],
};

const expectedCssConfig = {
  buildPath: 'build/web/pokemon/',
  files: [
    {
      destination: 'pikachu.css',
      filter: 'privateProperties',
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
