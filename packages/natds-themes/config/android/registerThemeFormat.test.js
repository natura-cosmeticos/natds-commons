import path from 'path';
import registerThemeFormat from './registerThemeFormat';
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
        value: "8dp",
      },
    },
    spacing: {
      small: {
        attributes: {},
        name: 'spacingSmall',
        original: {
          value: 8,
        },
        path: [
          'spacing',
          'small',
        ],
        value: "8dp",
      },
    },
  },
};

const platform = {
  files: [
    {
      destination: 'theme_attributes.xml',
    },
    {
      destination: 'Theme.Avon.Dark.xml',
    },
  ],
};

describe('registerAttributesFormat', () => {
  it('should call the formatBuilder function ', () => {
    jest.spyOn(formatBuilder, 'formatBuilder');
    registerThemeFormat();

    expect(formatBuilder.formatBuilder).toHaveBeenCalled();
  });

  it('should return the correct formatter template for dark mode', () => {
    const register = registerThemeFormat();

    register.brandName = 'Avon';
    register.mode = 'Dark';
    register.propertyName = 'color';

    const output = register.formatter(dictionary, platform);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerThemeFormat_light.snap.xml'));
  });

  it('should return the correct formatter template for light mode', () => {
    const register = registerThemeFormat();

    register.brandName = 'Avon';
    register.mode = 'Light';
    register.propertyName = 'color';

    const output = register.formatter(dictionary, platform);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerThemeFormat_dark.snap.xml'));
  });
});
