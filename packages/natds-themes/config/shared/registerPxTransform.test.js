import { registerPxTransform } from './registerPxTransform';
import * as helpers from './helpers';

describe('registerPxTransform', () => {
  it('should return the transform config', () => {
    const expectedConfig = {
      name: 'unit/px',
      transformer: expect.any(Function),
      type: 'value',
    };

    expect(registerPxTransform()).toMatchObject(expectedConfig);
  });

  it('should add the px unit to the value', () => {
    const config = registerPxTransform();

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

    expect(config.transformer(prop)).toEqual('8px');
  });

  it('should not match not px properties', () => {
    const isOneOfPropsSpy = jest
      .spyOn(helpers, 'isOneOfProps')
      .mockReturnValue(true);

    const config = registerPxTransform();

    const prop = {
      attributes: { category: 'color' },
      name: 'colorPrimary',
      original: {
        value: '#F091C9',
      },
      path: [
        'color',
        'primary',
      ],
      value: '#F091C9',
    };

    expect(config.matcher(prop)).toEqual(false);
    expect(isOneOfPropsSpy).toHaveBeenCalledWith(prop, [
      'color',
      'fontWeight',
      'fontFamily',
      'elevation',
      'opacity',
      'lineHeight',
    ]);
  });

  it('should match only dimension categories', () => {
    const isOneOfPropsSpy = jest
      .spyOn(helpers, 'isOneOfProps')
      .mockReturnValue(false);

    const config = registerPxTransform();

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

    expect(config.matcher(prop)).toEqual(true);
    expect(isOneOfPropsSpy).toHaveBeenCalledWith(prop, [
      'color',
      'fontWeight',
      'fontFamily',
      'elevation',
      'opacity',
      'lineHeight',
    ]);
  });
});
