import CryptoJS from 'crypto-js';
import * as sharedHelpers from '../shared/helpers';
import helpers, {
  createEncodedHashFromValue,
  isColor,
  isSpDimension,
  isDimension,
  isDimensionWithUnit,
  isUnitlessDimension,
} from './helpers';

const prop = {
  attributes: { category: 'spacing' },
  name: 'spacingSmall',
  original: {
    value: 8,
  },
  path: [
    'platform',
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
    it('should call isProp with the given prop', () => {
      const isPropSpy = jest.spyOn(sharedHelpers, 'isProp');

      isColor(prop);

      expect(isPropSpy).toHaveBeenCalledWith(prop, 'color');
    });
  });

  describe('isSpDimension', () => {
    it('should call isProp with the given prop', () => {
      const isPropSpy = jest.spyOn(sharedHelpers, 'isProp');

      isSpDimension(prop);

      expect(isPropSpy).toHaveBeenCalledWith(prop, 'fontSize');
    });
  });

  describe('isUnitlessDimension', () => {
    it('should call isOneOfProps with the given prop', () => {
      const isOneOfPropsSpy = jest.spyOn(sharedHelpers, 'isOneOfProps');

      isUnitlessDimension(prop);

      expect(isOneOfPropsSpy).toHaveBeenCalledWith(prop, ['opacity', 'lineHeight', 'letterSpacing']);
    });
  });

  describe('isDimensionWithUnit', () => {
    it('should return true if is a dimension that should have unit', () => {
      const isDimensionSpy = jest.spyOn(helpers, 'isDimension').mockReturnValue(true);
      const isUnitlessDimensionSpy = jest.spyOn(helpers, 'isUnitlessDimension').mockReturnValue(false);

      const result = isDimensionWithUnit(prop);

      expect(isDimensionSpy).toHaveBeenCalledWith(prop);
      expect(isUnitlessDimensionSpy).toHaveBeenCalledWith(prop);

      expect(result).toEqual(true);
    });

    it('should return false if is not dimension', () => {
      jest.spyOn(helpers, 'isDimension').mockReturnValue(false);

      const result = isDimensionWithUnit(prop);

      expect(result).toEqual(false);
    });

    it('should return false if is a dimension without unit', () => {
      jest.spyOn(helpers, 'isDimension').mockReturnValue(true);
      jest.spyOn(helpers, 'isUnitlessDimension').mockReturnValue(true);

      const result = isDimensionWithUnit(prop);

      expect(result).toEqual(false);
    });
  });
  describe('isDimension', () => {
    it('should call isOneOfProps with the given prop and negate the result', () => {
      const isOneOfPropsSpy = jest.spyOn(sharedHelpers, 'isOneOfProps').mockReturnValue(true);

      const result = isDimension(prop);

      expect(isOneOfPropsSpy).toHaveBeenCalledWith(prop, ['color', 'fontFamily', 'fontWeight']);
      expect(result).toEqual(false);
    });
    it('should call isOneOfProps with the given prop and return a truthy result', () => {
      const isOneOfPropsSpy = jest.spyOn(sharedHelpers, 'isOneOfProps').mockReturnValue(false);

      const result = isDimension(prop);

      expect(isOneOfPropsSpy).toHaveBeenCalledWith(prop, ['color', 'fontFamily', 'fontWeight']);
      expect(result).toEqual(false);
    });
  });
});
