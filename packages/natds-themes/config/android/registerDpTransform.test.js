import { registerDpTransform } from './registerDpTransform';
import * as helpers from './helpers';

describe('registerDpTransform', () => {
  it('should return the transform config', () => {
    const expectedConfig = {
      name: 'size/dp-custom',
      transformer: expect.any(Function),
      type: 'value',
    };

    expect(registerDpTransform()).toMatchObject(expectedConfig);
  });

  it('should append the dp unit to the value when isSpDimension is false', () => {
    jest.spyOn(helpers, 'isSpDimension').mockReturnValue(false);

    const config = registerDpTransform();

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

    expect(config.transformer(prop)).toEqual('8dp');
  });

  it('should append the sp unit to the value when isSpDimension is true', () => {
    jest.spyOn(helpers, 'isSpDimension').mockReturnValue(true);

    const config = registerDpTransform();

    const prop = {
      attributes: { category: 'fontSize' },
      name: 'fontSizeSmall',
      original: {
        value: 8,
      },
      path: [
        'fontSize',
        'small',
      ],
      value: 8,
    };

    expect(config.transformer(prop)).toEqual('8sp');
  });

  it('should match only dimension with unit properties', () => {
    const isDimensionWithUnitSpy = jest.spyOn(helpers, 'isDimensionWithUnit');

    const config = registerDpTransform();

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

    expect(isDimensionWithUnitSpy).toHaveBeenCalled();
  });
});
