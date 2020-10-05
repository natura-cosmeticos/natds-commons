import { registerAttributeTypeTransform } from './registerAttributeTypeTransform';
import * as helpers from '../shared/helpers';

describe('registerAttributeTypeTransform', () => {
  it('should return the transform config', () => {
    const expectedConfig = {
      name: 'size/attrType',
      transformer: expect.any(Function),
      type: 'attribute',
    };

    expect(registerAttributeTypeTransform()).toMatchObject(expectedConfig);
  });

  it('should add the type of the attribute for dimensions', () => {
    jest.spyOn(helpers, 'isOneOfProps').mockReturnValue(false);

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
    jest.spyOn(helpers, 'isOneOfProps').mockReturnValue(true);

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
});
