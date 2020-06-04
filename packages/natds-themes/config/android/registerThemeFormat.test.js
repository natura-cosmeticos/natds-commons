import path from 'path';
import registerThemeFormat, { buildThemeInfo } from './registerThemeFormat';

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
      destination: 'theme_attributes.xml',
    },
    {
      destination: 'Theme.Avon.Dark.xml',
    },
  ],
};

describe('registerAttributesFormat', () => {
  it('should return the register config', () => {
    const register = registerThemeFormat();

    expect(typeof register.formatter).toBe('function');
    expect(register.name).toBe('android/themes');
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
