import path from 'path';
import registerColorStructFormat from './registerColorStructFormat';
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

const platform = {
  files: [
    {
      destination: 'AvonColorPaletteDark.swift',
    },
  ],
};

describe('registerColorStructFormat', () => {
  it('should call the formatBuilder function ', () => {
    jest.spyOn(formatBuilder, 'formatBuilder');
    registerColorStructFormat();

    expect(formatBuilder.formatBuilder).toHaveBeenCalled();
  });

  it('should return the correct formatter template', () => {
    const register = registerColorStructFormat();

    const output = register.formatter(dictionary, platform);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerColorStructFormat.snap.swift'));
  });
});
