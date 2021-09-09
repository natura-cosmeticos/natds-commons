import { registerAttributeTypeTransform, getType } from './registerAttributeTypeTransform';
import * as helpers from '../../shared/helpers';

jest.mock('../../shared/helpers');

describe('registerAttributeTypeTransform', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return the transform config', () => {
    const expectedConfig = {
      name: 'size/attrType',
      transformer: expect.any(Function),
      type: 'attribute',
    };

    expect(registerAttributeTypeTransform()).toMatchObject(expectedConfig);
  });

  it('should add the type of the attribute for dimensions', () => {
    jest.spyOn(helpers, 'isOneOfProps').mockReturnValue(() => false);

    const transformConfig = registerAttributeTypeTransform();

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

    const expectedProp = {
      customOptions: {
        type: 'dimension',
      },
    };

    expect(transformConfig.transformer(prop)).toEqual(expectedProp);
  });

  it('should add the type of the attribute for string', () => {
    jest.spyOn(helpers, 'isOneOfProps').mockReturnValue(() => true);

    const transformConfig = registerAttributeTypeTransform();

    const prop = {
      attributes: { category: 'fontFamily' },
      name: 'fontFamilySmall',
      original: {
        value: 8,
      },
      path: [
        'fontFamily',
        'small',
      ],
      value: 8,
    };

    const expectedProp = {
      customOptions: {
        type: 'string',
      },
    };

    expect(transformConfig.transformer(prop)).toEqual(expectedProp);
  });

  describe('getType', () => {
    it('should return the type for the prop when is string', () => {
      jest.spyOn(helpers, 'isOneOfProps').mockReturnValue(() => true);

      const prop = {
        attributes: { category: 'fontFamily' },
        path: [
          'fontFamily',
          'small',
        ],
      };

      expect(getType(prop)).toEqual('string');
    });

    it('should return the type for the prop when is an asset', () => {
      jest.spyOn(helpers, 'isOneOfProps').mockReturnValue(() => false);
      jest.spyOn(helpers, 'isAssetFile').mockReturnValue(true);

      const prop = {
        attributes: { category: 'asset' },
        path: [
          'asset',
          'file',
        ],
      };

      expect(getType(prop)).toEqual('reference');
    });

    it('should return the type for the prop when is an color', () => {
      jest.spyOn(helpers, 'isOneOfProps').mockReturnValue(() => false);
      jest.spyOn(helpers, 'isAssetFile').mockReturnValue(false);

      const prop = {
        attributes: { category: 'color' },
        path: [
          'color',
          'primary',
        ],
      };

      expect(getType(prop)).toEqual('color');
    });

    it('should return the type for the prop when is an dimension', () => {
      helpers.isOneOfProps.mockReturnValue(() => false);
      helpers.isAssetFile.mockReturnValue(false);

      const prop = {
        attributes: { category: 'spacing' },
        path: [
          'spacing',
          'small',
        ],
      };

      expect(getType(prop)).toEqual('dimension');
    });
  });
});
