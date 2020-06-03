import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

export const buildThemeInfo = (fileName) => {
  const themeName = fileName.replace('.xml', '');
  const [, , mode] = fileName.split('.');

  return {
    mode: mode === 'Light' ? 'Light' : 'DayNight',
    themeName,
  };
};

const templateDataBuilder = (dictionary, platform) => {
  const { mode, themeName } = buildThemeInfo(platform.files[1].destination);

  return {
    color: dictionary.properties.color,
    mode,
    size: dictionary.properties.size,
    themeName,
  };
};

const registerThemeFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/themes.hbs');

  return formatBuilder('android/themes', templatePath, templateDataBuilder);
};

export default registerThemeFormat;
