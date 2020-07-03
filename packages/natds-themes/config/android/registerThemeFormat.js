import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const templateDataBuilder = (
  dictionary, platform, { brandName, mode },
) => ({
  brandName,
  color: dictionary.properties.color,
  materialMode: mode === 'Light' ? 'Light' : 'DayNight',
  mode,
  size: dictionary.properties.size,
  spacing: dictionary.properties.spacing,
});

const registerThemeFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/themes.hbs');

  return formatBuilder('android/themes', templatePath, templateDataBuilder);
};

export default registerThemeFormat;
