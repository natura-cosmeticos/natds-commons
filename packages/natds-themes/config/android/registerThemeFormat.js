import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';
import { flattenProps } from '../shared/helpers';

const templateDataBuilder = (
  { properties }, platform, { brandName, mode },
) => ({
  brandName,
  materialMode: mode === 'Light' ? 'Light' : 'DayNight',
  mode,
  properties: flattenProps(properties),
});

const registerThemeFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/themes.hbs');

  return formatBuilder('android/themes', templatePath, templateDataBuilder);
};

export default registerThemeFormat;
