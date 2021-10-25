import CryptoJS from 'crypto-js';
import {
  createEncodedHashFromValue,
  isColor,
  isSpDimension,
  isDimension,
  isDimensionWithUnit,
  isUnitlessDimension,
  filterSearchAndFontFamilyProps,
  filterPrivateAndFontFamilyProps,
} from './helpers';

const prop = {
  attributes: { category: 'spacing' },
  name: 'spacingSmall',
  original: {
    value: 8,
  },
  path: [
    'spacing',
    'small',
  ],
  value: 8,
};

describe('helpers', () => {
  afterEach(() => jest.resetAllMocks());

  describe('createEncodedHashFromValue', () => {
    it('should create a key encoding the value with prefix', () => {
      const cryptoSpy = jest.spyOn(CryptoJS, 'MD5').mockReturnValue('v3ry3nc0d3dV4lu3');
      const result = createEncodedHashFromValue('value');

      expect(cryptoSpy).toHaveBeenCalledWith('value');
      expect(result).toEqual('ssotv3ry3nc0d3dV4lu3');
    });

    it('should convert values to string before encoding', () => {
      const cryptoSpy = jest.spyOn(CryptoJS, 'MD5');

      createEncodedHashFromValue(25);

      expect(cryptoSpy).toHaveBeenCalledWith('25');
    });
  });

  describe('isColor', () => {
    it('should return true if is a color prop', () => {
      const colorProp = {
        ...prop,
        path: ['color', 'primary'],
      };

      expect(isColor(colorProp)).toEqual(true);
    });

    it('should return false if is not a color prop', () => {
      expect(isColor(prop)).toEqual(false);
    });

    it('should return false if is a spectrum prop', () => {
      const spectrum = {
        ...prop,
        path: ['spectrum', 'color', 'primary'],
      };

      expect(isColor(spectrum)).toEqual(false);
    });
  });

  describe('isSpDimension', () => {
    it('should return true if is a dimension prop with sp unit', () => {
      const dimensionProp = {
        ...prop,
        path: ['typography', 'fontSize', 'small'],
      };

      expect(isSpDimension(dimensionProp)).toEqual(true);
    });

    it('should return false if is not a dimension prop with sp unit', () => {
      expect(isSpDimension(prop)).toEqual(false);
    });
  });

  describe('isUnitlessDimension', () => {
    it('should return true when is a dimension without unit', () => {
      const opacityProp = {
        ...prop,
        path: ['opacity', 'medium'],
      };

      isUnitlessDimension(opacityProp);

      expect(isUnitlessDimension(opacityProp)).toEqual(true);
    });

    it('should return false when is not a dimension without unit', () => {
      expect(isUnitlessDimension(prop)).toEqual(false);
    });
  });

  describe('isDimensionWithUnit', () => {
    it('should return true if is a dimension that should have unit', () => {
      const result = isDimensionWithUnit(prop);

      expect(result).toEqual(true);
    });

    it('should return false if is not dimension', () => {
      const notDimensionProp = {
        ...prop,
        path: ['color', 'primary'],
      };

      const result = isDimensionWithUnit(notDimensionProp);

      expect(result).toEqual(false);
    });

    it('should return false if is a dimension without unit', () => {
      const dimensionWithoutUnitProp = {
        ...prop,
        path: ['opacity', 'medium'],
      };
      const result = isDimensionWithUnit(dimensionWithoutUnitProp);

      expect(result).toEqual(false);
    });
  });
  describe('isDimension', () => {
    it('should return true if it is a dimension prop', () => {
      const result = isDimension(prop);

      expect(result).toEqual(true);
    });

    it('should return false if it is not a dimension prop', () => {
      const notDimensionProp = {
        ...prop,
        path: ['color', 'primary'],
      };

      const result = isDimension(notDimensionProp);

      expect(result).toEqual(false);
    });

    it('should return false if it is a private prop', () => {
      const privateProp = {
        ...prop,
        path: ['platform', 'spacing', 'small'],
      };

      const result = isDimension(privateProp);

      expect(result).toEqual(false);
    });
  });

  describe('filterPrivateAndFontFamilyProps', () => {
    it('should return false if it is a private prop', () => {
      const privateProp = {
        ...prop,
        path: ['platform', 'spacing', 'small'],
      };

      const result = filterPrivateAndFontFamilyProps(privateProp);

      expect(result).toEqual(false);
    });

    it('should return false if it is a font family prop', () => {
      const privateProp = {
        ...prop,
        path: ['typography', 'fontFamily', 'small'],
      };

      const result = filterPrivateAndFontFamilyProps(privateProp);

      expect(result).toEqual(false);
    });

    it('should return true if it is an allowed prop', () => {
      const privateProp = {
        ...prop,
        path: ['typography', 'lineHeight', 'small'],
      };

      const result = filterPrivateAndFontFamilyProps(privateProp);

      expect(result).toEqual(true);
    });
  });

  describe('filterSearchAndFontFamilyProps', () => {
    it('should return false if it is a font family prop', () => {
      const privateProp = {
        ...prop,
        path: ['typography', 'fontFamily', 'small'],
      };

      const result = filterSearchAndFontFamilyProps(privateProp);

      expect(result).toEqual(false);
    });

    it('should return true if it is an allowed prop', () => {
      const privateProp = {
        ...prop,
        path: ['typography', 'lineHeight', 'small'],
      };

      const result = filterSearchAndFontFamilyProps(privateProp);

      expect(result).toEqual(true);
    });
  });
});
