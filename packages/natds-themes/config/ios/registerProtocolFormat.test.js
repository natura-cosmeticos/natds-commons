import path from 'path';
import registerProtocolFormat from './registerProtocolFormat';
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

describe('registerProtocolFormat', () => {
  it('should call the formatBuilder function ', () => {
    jest.spyOn(formatBuilder, 'formatBuilder');
    registerProtocolFormat();

    expect(formatBuilder.formatBuilder).toHaveBeenCalled();
  });

  it('should return the correct formatter template', () => {
    const register = registerProtocolFormat();

    register.propertyName = 'color';
    register.protocolName = 'Pokemon';
    register.protocolType = 'Pokemons';

    const output = register.formatter(dictionary, null);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerProtocolFormat.snap.swift'));
  });
});
