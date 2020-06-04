import path from 'path';
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

    const output = register.formatter(dictionary);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerHtmlFormat.snap.html'));
  });
});
