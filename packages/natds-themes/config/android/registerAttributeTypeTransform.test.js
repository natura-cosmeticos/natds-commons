import { registerAttributeTypeTransform } from './registerAttributeTypeTransform';

describe('registerAttributeTypeTransform', () => {
  it('should return the transform config', () => {
    const expectedConfig = {
      name: 'size/attrType',
      transformer: expect.any(Function),
      type: 'attribute',
    };

    expect(registerAttributeTypeTransform()).toMatchObject(expectedConfig);
  });

  it('should add the type of the attribute', () => {
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
});
