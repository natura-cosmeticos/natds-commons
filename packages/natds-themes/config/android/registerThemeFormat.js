import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const templateDataBuilder = (
  { properties }, platform, { brandName, mode },
) => ({
  brandName,
  materialMode: mode === 'Light' ? 'Light' : 'DayNight',
  mode,
  properties,
});

const registerThemeFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/themes.hbs');

  return formatBuilder('android/themes', templatePath, templateDataBuilder);
};

export default registerThemeFormat;
