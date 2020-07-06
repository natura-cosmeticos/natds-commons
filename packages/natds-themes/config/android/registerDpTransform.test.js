import { registerDpTransform } from './registerDpTransform';

describe('registerDpTransform', () => {
  it('should return the transform config', () => {
    const expectedConfig = {
      name: 'size/dp-custom',
      transformer: expect.any(Function),
      type: 'value',
    };

    expect(registerDpTransform()).toMatchObject(expectedConfig);
  });

  it('should add the type information to customOptions attributes', () => {
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

  it('should match only dimension categories', () => {
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

    expect(config.matcher(prop)).toEqual(true);
  });

  it('should not match color category', () => {
    const config = registerDpTransform();

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
  });
});
