import path from 'path';
import registerThemeFormat, { buildThemeInfo } from './registerThemeFormat';
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

  it('should return the correct formatter template', () => {
    const register = registerThemeFormat();
    const output = register.formatter(dictionary, platform);

    expect(output).toMatchFile(path.join(__dirname, '__file_snapshots__/registerThemeFormat.snap.xml'));
  });

  describe('buildThemeInfo', () => {
    it('should return the theme brand and mode information for dark mode', () => {
      const themeInfo = buildThemeInfo('Theme.Avon.Dark.xml');

      const expectedThemeInfo = {
        mode: 'DayNight',
        themeName: 'Theme.Avon.Dark',
      };

      expect(themeInfo).toEqual(expectedThemeInfo);
    });

    it('should return the theme brand and mode information for light mode', () => {
      const themeInfo = buildThemeInfo('Theme.Avon.Light.xml');

      const expectedThemeInfo = {
        mode: 'Light',
        themeName: 'Theme.Avon.Light',
      };

      expect(themeInfo).toEqual(expectedThemeInfo);
    });
  });
});
