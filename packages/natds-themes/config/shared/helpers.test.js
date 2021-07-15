import fs from 'fs';
import path from 'path';
import {
  isPrivateProp,
  isProp,
  isOneOfProps,
  flattenProps,
  splitTokensAndComponents,
  flatTokensAndComponents,
  readAsset,
  execPattern,
  convertBase64ToExternalImage,
} from './helpers';

jest.mock('fs');
jest.mock('path');

describe('helpers', () => {
  describe('isProp', () => {
    it('should return true if the given prop name is present on current prop', () => {
      const prop = {
        path: ['typography', 'lineHeight', 'small'],
      };

      expect(isProp('lineHeight')(prop)).toEqual(true);
    });

    it('should return false if the given prop name is not present on current prop', () => {
      const prop = {
        path: ['typography', 'lineHeight', 'small'],
      };

      expect(isProp('fontWeight')(prop)).toEqual(false);
    });
  });

  describe('isOneOfProps', () => {
    it('should return true if one of the given props name is present on current prop', () => {
      const prop = {
        path: ['typography', 'lineHeight', 'small'],
      };

      expect(isOneOfProps(['borderRadius', 'lineHeight'])(prop)).toEqual(true);
    });

    it('should return false if none of the given prop names is not present on current prop', () => {
      const prop = {
        path: ['typography', 'lineHeight', 'small'],
      };

      expect(isOneOfProps(['borderRadius', 'fontWeight'])(prop)).toEqual(false);
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

  describe('isPrivateProp', () => {
    it('should returns true when has a private property', () => {
      const prop = {
        path: ['platform', 'typography', 'lineHeight', 'small'],
      };

      expect(isPrivateProp(prop)).toBe(true);
    });
    it('should returns false when has no private property', () => {
      const prop = {
        path: ['typography', 'lineHeight', 'small'],
      };

      expect(isPrivateProp(prop)).toBe(false);
    });
  });

  describe('isSpectrumProp', () => {
    it('should returns true when is a spectrum property', () => {
      const prop = {
        path: ['spectrum', 'primary'],
      };

      expect(isPrivateProp(prop)).toBe(true);
    });
    it('should returns false when is not a spectrum private property', () => {
      const prop = {
        path: ['typography', 'lineHeight', 'small'],
      };

      expect(isPrivateProp(prop)).toBe(false);
    });
  });

  describe('readAsset', () => {
    beforeEach(() => {
      fs.readFileSync.mockReturnValue('<svg>natura-a-official</svg>');
      path.join.mockReturnValue('a/path/natura-a-official');
    });

    it('should return the given asset inline', () => {
      const result = readAsset('natura-a-official');
      const expectedResult = '<svg>natura-a-official</svg>';

      expect(result).toEqual(expectedResult);
      expect(fs.readFileSync).toHaveBeenCalledWith('a/path/natura-a-official');
    });
  });

  describe('execPattern', () => {
    it('should return one match to the given pattern and data', () => {
      const pattern = 'data:image/png;base64,(?<imageData>[^"\']+)';
      const match = execPattern(pattern, '<svg><image xlink:href="data:image/png;base64,something"/></svg>');

      expect(match.length).toBe(1);
      expect(match).toEqual([{ imageData: 'something' }]);
    });
  });

  describe('convertBase64ToExternalImage', () => {
    beforeEach(() => {
      path.join.mockReturnValue('a/path/natura-a-official-embed-image-0.png');
    });
    it('should convert embeded image to external image', () => {
      const svg = '<svg><image xlink:href="data:image/png;base64,something"/></svg>';
      const assetName = 'natura-a-official';

      const result = convertBase64ToExternalImage(assetName)(svg, { imageData: 'something' }, 0);
      const expectedResult = '<svg><image xlink:href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets/natura-a-official-embed-image-0.png"/></svg>';

      expect(result).toBe(expectedResult);
      expect(fs.writeFileSync).toHaveBeenCalledWith('a/path/natura-a-official-embed-image-0.png', 'something', 'base64');
    });
  });
});
