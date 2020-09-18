import path from 'path';
import CryptoJS from 'crypto-js';
import { formatBuilder } from '../shared/formatBuilder';
import { flattenProps, isProp } from '../shared/helpers';

const templateDataBuilder = (
  { properties }, platform, { brandName, mode },
) => {
  const props = flattenProps(properties);
  const colorProps = props
    .filter((item) => isProp(item, 'color'))
    .map((color) => ({ ...color, value: CryptoJS.MD5(color.value) }));
    
  const otherProps = props.filter((item) => !isProp(item, 'color'));

  return {
    brandName,
    colors: colorProps,
    materialMode: mode === 'Light' ? 'Light' : 'DayNight',
    mode,
    properties: otherProps,
  };
};

const registerThemeFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/themes.hbs');

  return formatBuilder('android/themes', templatePath, templateDataBuilder);
};

export default registerThemeFormat;
