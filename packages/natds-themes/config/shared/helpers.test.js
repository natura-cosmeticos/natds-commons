import {
  filterCategory,
  isProp,
  flattenProps,
  splitTokensAndComponents,
} from './helpers';

describe('helpers', () => {
  describe('filterCategory', () => {
    it('should return true if the category matches the given name', () => {
      const dictionary = {
        attributes: {
          category: 'pikachu',
        },
      };

      expect(filterCategory(dictionary, 'pikachu')).toEqual(true);
    });

    it('should return false if the category does not match the given name', () => {
      const dictionary = {
        attributes: {
          category: 'pikachu',
        },
      };

      expect(filterCategory(dictionary, 'bulbasaur')).toEqual(false);
    });
  });

  describe('isProp', () => {
    it('should return true if the given prop name is present on current prop', () => {
      const prop = {
        path: ['typography', 'lineHeight', 'small'],
      };

      expect(isProp(prop, 'lineHeight')).toEqual(true);
    });

    it('should return false if the given prop name is not present on current prop', () => {
      const prop = {
        path: ['typography', 'lineHeight', 'small'],
      };

      expect(isProp(prop, 'fontWeight')).toEqual(false);
    });
  });

  describe('flattenProps', () => {
    it('should flatten the properties object into a simple array ', () => {
      const properties = {
        typography: {
          lineHeight: {
            small: {
              name: 'typographyLineHeightSmall',
            },
          },
        },
      };

      expect(flattenProps(properties)).toEqual([{ name: 'typographyLineHeightSmall' }]);
    });
  });

  describe('splitTokensAndComponents', () => {
    it('should split the properties into tokens and components', () => {
      const properties = {
        borderRadius: {},
        button: {},
        color: {},
        dialog: {},
        size: {},
        spacing: {},
        typography: {},
      };

      const expectedResult = {
        components: {
          button: {},
          dialog: {},
        },
        tokens: {
          borderRadius: {},
          color: {},
          size: {},
          spacing: {},
          typography: {},
        },
      };

      expect(splitTokensAndComponents(properties)).toEqual(expectedResult);
    });
  });
});
