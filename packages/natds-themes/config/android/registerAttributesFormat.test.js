import path from 'path';
import registerAttributesFormat from './registerAttributesFormat';
import * as formatBuilder from '../shared/formatBuilder';
import '../shared/config';

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
    size: {
      tiny: {
        attributes: {},
        name: 'sizeTiny',
        original: {
          value: 8,
        },
        path: [
          'size',
          'tiny',
        ],
        value: 8,
      },
    },
  },
};

describe('registerAttributesFormat', () => {
  it('should call the formatBuilder function', () => {
    jest.spyOn(formatBuilder, 'formatBuilder');
    registerAttributesFormat();

    expect(formatBuilder.formatBuilder).toHaveBeenCalled();
  });

  it('should return the correct formatter template', () => {
    const register = registerAttributesFormat();
    const output = register.formatter(dictionary);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerAttributesFormat.snap.xml'));
  });
});
