import path from 'path';
import registerDynamicColorFormat from './registerDynamicColorFormat';

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

describe('registerDynamicColorFormat', () => {
  it('should return the register config', () => {
    const register = registerDynamicColorFormat();

    expect(typeof register.formatter).toBe('function');
    expect(register.name).toBe('ios-swift/dynamic-colors.swift');
  });

  it('should return the correct formatter template', () => {
    const register = registerDynamicColorFormat();

    const output = register.formatter(dictionary);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerDynamicColorFormat.snap.swift'));
  });
});
