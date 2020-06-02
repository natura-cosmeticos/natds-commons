import path from 'path';
import registerColorPalletProtocolFormat from './registerColorPalletProtocolFormat';
import * as formatBuilder from '../shared/formatBuilder';

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
  it('should call the formatBuilder function ', () => {
    jest.spyOn(formatBuilder, 'formatBuilder');
    registerColorPalletProtocolFormat();

    expect(formatBuilder.formatBuilder).toHaveBeenCalled();
  });

  it('should return the correct formatter template', () => {
    const register = registerColorPalletProtocolFormat();

    const output = register.formatter(dictionary);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerColorPalletProtocolFormat.snap.swift'));
  });
});
