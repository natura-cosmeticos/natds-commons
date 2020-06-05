import path from 'path';
import registerStructFormat from './registerStructFormat';
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

describe('registerStructFormat', () => {
  it('should call the formatBuilder function ', () => {
    jest.spyOn(formatBuilder, 'formatBuilder');
    registerStructFormat();

    expect(formatBuilder.formatBuilder).toHaveBeenCalled();
  });

  it('should return the correct formatter template', () => {
    const register = registerStructFormat();

    register.interfaceName = 'Interface';
    register.structName = 'Struct';
    register.type = 'Type';
    register.propertyName = 'color';

    const output = register.formatter(dictionary, platform);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerStructFormat.snap.swift'));
  });
});
