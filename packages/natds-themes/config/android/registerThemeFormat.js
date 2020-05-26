import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const buildThemeInfo = (fileName) => {
  const themeName = fileName.replace('.xml', '');
  const [, , mode] = fileName.split('.');

  return {
    mode: mode === 'light' ? 'Light' : 'DayNight',
    themeName,
  };
};

const formatter = (dictionary, platform) => {
  const html = fs.readFileSync(path.resolve(__dirname, './templates/themes.hbs')).toString();
  const htmlTemplate = Handlebars.compile(html);

  const { mode, themeName } = buildThemeInfo(platform.files[1].destination);

  return htmlTemplate({
    color: dictionary.properties.color,
    mode,
    themeName,
  });
};

const registerThemeFormat = () => ({
  formatter,
  name: 'android/themes',
});

export default registerThemeFormat;
