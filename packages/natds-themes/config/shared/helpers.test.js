/* eslint-disable max-lines */

import {
  isCategory,
  isItem,
  isProp,
  flattenProps,
  splitTokensAndComponents,
  flatTokensAndComponents,
} from './helpers';

describe('helpers', () => {
  describe('isCategory', () => {
    it('should return true if the category matches the given name', () => {
      const dictionary = {
        attributes: {
          category: 'pikachu',
        },
      };

      expect(isCategory(dictionary, 'pikachu')).toEqual(true);
    });

    it('should return false if the category does not match the given name', () => {
      const dictionary = {
        attributes: {
          category: 'pikachu',
        },
      };

      expect(isCategory(dictionary, 'bulbasaur')).toEqual(false);
    });
  });

  describe('isItem', () => {
    it('should return true if the item matches the given name', () => {
      const dictionary = {
        attributes: {
          item: 'pikachu',
        },
      };

      expect(isItem(dictionary, 'pikachu')).toEqual(true);
    });

    it('should return false if the item does not match the given name', () => {
      const dictionary = {
        attributes: {
          item: 'pikachu',
        },
      };

      expect(isItem(dictionary, 'bulbasaur')).toEqual(false);
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
        elevation: {},
        opacity: {},
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
          elevation: {},
          opacity: {},
          size: {},
          spacing: {},
          typography: {},
        },
      };

      expect(splitTokensAndComponents(properties)).toEqual(expectedResult);
    });
  });

  describe('flatTokensAndComponents', () => {
    it('should split and flat the properties into tokens and components', () => {
      const dictionary = {
        properties: {
          borderRadius: {
            small: {
              name: 'borderRadiusSmall',
              value: 8,
            },
          },
          button: {
            outlined: {
              primary: {
                name: 'buttonOutlinedPrimary',
                value: 'red',
              },
            },
          },
          color: {
            primary: {
              name: 'colorPrimary',
              value: 'red',
            },
          },
          elevation: {
            tiny: {
              name: 'elevationTiny',
              value: 1,
            },
          },
          opacity: {
            opaque: {
              name: 'opacityOpaque',
              value: 1,
            },
          },
          size: {
            small: {
              name: 'sizeSmall',
              value: 8,
            },
          },
          spacing: {
            small: {
              name: 'spacingSmall',
              value: 8,
            },
          },
          typography: {
            primary: {
              name: 'typographyPrimary',
              value: 'Roboto',
            },
          },
        },
      };

      const expectedResult = {
        components: [
          {
            name: 'buttonOutlinedPrimary',
            value: 'red',
          },
        ],
        tokens: [
          {
            name: 'borderRadiusSmall',
            value: 8,
          },
          {
            name: 'colorPrimary',
            value: 'red',
          },
          {
            name: 'elevationTiny',
            value: 1,
          },
          {
            name: 'opacityOpaque',
            value: 1,
          },
          {
            name: 'sizeSmall',
            value: 8,
          },
          {
            name: 'spacingSmall',
            value: 8,
          },
          {
            name: 'typographyPrimary',
            value: 'Roboto',
          },
        ],
      };

      const result = flatTokensAndComponents(dictionary);

      expect(result).toEqual(expectedResult);
    });
  });
});
