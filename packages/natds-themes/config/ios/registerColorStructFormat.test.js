import registerColorStructFormat from './registerColorStructFormat';

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
      destination: 'AvonColorPaletteDark.swift',
    },
  ],
};

describe('registerColorPalletProtocolFormat', () => {
  it('should return the register config', () => {
    const register = registerColorStructFormat();

    expect(typeof register.formatter).toBe('function');
    expect(register.name).toBe('ios-swift/struct-colors.swift');
  });

  it('should return the correct formatter template', () => {
    const register = registerColorStructFormat();

    expect(register.formatter(dictionary, platform)).toMatchSnapshot();
  });
});
