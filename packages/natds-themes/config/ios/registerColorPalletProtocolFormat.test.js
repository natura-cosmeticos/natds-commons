import path from 'path';
import registerColorPalletProtocolFormat from './registerColorPalletProtocolFormat';

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

describe('registerColorPalletProtocolFormat', () => {
  it('should return the register config', () => {
    const register = registerColorPalletProtocolFormat();

    expect(typeof register.formatter).toBe('function');
    expect(register.name).toBe('ios-swift/protocol-colors-palette.swift');
  });

  it('should return the correct formatter template', () => {
    const register = registerColorPalletProtocolFormat();

    const output = register.formatter(dictionary);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerColorPalletProtocolFormat.snap.swift'));
  });
});
