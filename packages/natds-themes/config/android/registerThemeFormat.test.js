import registerThemeFormat from './registerThemeFormat';

const dictionary = {
  properties: {
    color: {
      primary: {
        attributes: {},
        name: 'colorPrimary',
        original: {
          value: '#F091C9',
        },
        path: [
          'color',
          'primary',
        ],
        value: '#F091C9',
      },
    },
  },
};

const platform = {
  files: [
    {
      destination: 'theme_attributes.xml',
    },
    {
      destination: 'Theme.Avon.Dark.xml',
    },
  ],
};

describe('registerAttributesFormat', () => {
  it('should return the register config', () => {
    const register = registerThemeFormat();

    expect(typeof register.formatter).toBe('function');
    expect(register.name).toBe('android/themes');
  });

  it('should return the correct formatter template', () => {
    const register = registerThemeFormat();

    expect(register.formatter(dictionary, platform)).toMatchSnapshot();
  });
});
