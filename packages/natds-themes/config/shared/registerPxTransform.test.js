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

  it('should match only dimension categories', () => {
    const isOneOfPropsReturnSpy = jest.fn();
    const isOneOfPropsSpy = jest
      .spyOn(helpers, 'isOneOfProps')
      .mockReturnValue(isOneOfPropsReturnSpy);

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

    config.matcher(prop);

    expect(isOneOfPropsReturnSpy).toHaveBeenCalledWith(prop);
    expect(isOneOfPropsSpy).toHaveBeenCalledWith([
      'color',
      'fontWeight',
      'fontFamily',
      'elevation',
      'opacity',
      'lineHeight',
      'asset',
      'spectrum',
    ]);
  });
});
