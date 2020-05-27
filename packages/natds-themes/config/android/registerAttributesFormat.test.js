import registerAttributesFormat from './registerAttributesFormat';

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

describe('registerAttributesFormat', () => {
  it('should return the register config', () => {
    const register = registerAttributesFormat();

    expect(typeof register.formatter).toBe('function');
    expect(register.name).toBe('android/attributes');
  });

  it('should return the correct formatter template', () => {
    const register = registerAttributesFormat();

    expect(register.formatter(dictionary)).toMatchSnapshot();
  });
});
