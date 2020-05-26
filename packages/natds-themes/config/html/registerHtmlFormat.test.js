import registerHtmlFormat from './registerHtmlFormat';

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

describe('registerHtmlFormat', () => {
  it('should return the register config', () => {
    const register = registerHtmlFormat();

    expect(typeof register.formatter).toBe('function');
    expect(register.name).toBe('html/colors');
  });

  it('should return the correct formatter template', () => {
    const register = registerHtmlFormat();

    expect(register.formatter(dictionary)).toMatchSnapshot();
  });
});
