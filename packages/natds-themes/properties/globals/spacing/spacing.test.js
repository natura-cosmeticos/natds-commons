import spacing from './spacing';

describe('spacing', () => {
  it('should return the correct spacing config', () => {
    const expectedSpacingConfig = {
      spacing: {
        large: {
          value: 48,
        },
        micro: {
          value: 4,
        },
        none: {
          value: 0,
        },
        semi: {
          value: 32,
        },
        small: {
          value: 16,
        },
        standard: {
          value: 24,
        },
        tiny: {
          value: 8,
        },
        xLarge: {
          value: 64,
        },
      },
    };

    expect(spacing).toEqual(expectedSpacingConfig);
  });
});
