import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';
import { flattenProps } from '../shared/helpers';
import {
  isDimension, createEncodedHashFromValue, isColor, mapFilteredValues,
} from './helpers';

const encodeValue = (item) => ({ ...item, value: createEncodedHashFromValue(item.value) });

const templateDataBuilder = (
  { properties }, platform, { brandName, mode },
) => {
  const props = flattenProps(properties);

  const otherProps = props.filter((item) => !isColor && !isDimension(item));

  return {
    brandName,
    colors: mapFilteredValues(props, isColor, encodeValue),
    dimensions: mapFilteredValues(props, isDimension, encodeValue),
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
