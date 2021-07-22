/* eslint-disable mocha/max-top-level-suites */
import path from 'path';
import { registerAttributesFormat, registerSpectrumFormat } from './registerAttributesFormat';
import '../../shared/config';

const dictionary = {
  properties: {
    color: {
      primary: {
        attributes: { customOptions: { type: 'color' } },
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
        attributes: { customOptions: { type: 'dimension' } },
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
    spacing: {
      small: {
        attributes: { customOptions: { type: 'dimension' } },
        name: 'spacingSmall',
        original: {
          value: 8,
        },
        path: [
          'spacing',
          'small',
        ],
        value: 8,
      },
    },
  },
};

const spectrum = {
  properties: {
    spectrum: {
      primary: {
        attributes: { customOptions: { type: 'color' } },
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
  it('should return the correct formatter template', () => {
    const register = registerAttributesFormat();
    const output = register.formatter(dictionary);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerAttributesFormat.snap.xml'));
  });
});

describe('registerSpectrumFormat', () => {
  it('should return the correct formatter template', () => {
    const register = registerSpectrumFormat();
    const output = register.formatter(spectrum);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerSpectrumFormat.snap.xml'));
  });
});
