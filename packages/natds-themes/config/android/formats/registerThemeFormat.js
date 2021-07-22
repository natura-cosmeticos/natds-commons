import path from 'path';
import { allPass, filter } from 'ramda';
import {
  flattenProps, isAssetFile, isAsset, negate, formatBuilder,
} from '../../shared/helpers';
import {
  isDimension, createEncodedHashFromValue, isColor, mapFilteredValues,
} from '../shared/helpers';

const encodeValue = (item) => ({ ...item, value: createEncodedHashFromValue(item.value) });

const templateDataBuilder = (
  { properties }, platform, { brandName, mode },
) => {
  const props = flattenProps(properties);

  const filterPropsWithoutPrefix = allPass([
    negate(isColor),
    negate(isDimension),
    negate(isAsset),
  ]);

  return {
    brandName,
    colors: mapFilteredValues(props, isColor, encodeValue),
    dimensions: mapFilteredValues(props, isDimension, encodeValue),
    drawables: filter(isAssetFile),
    materialMode: mode === 'Light' ? 'Light' : 'DayNight',
    mode,
    properties: filter(filterPropsWithoutPrefix),
  };
};

const registerThemeFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/themes.hbs');

  return formatBuilder('android/themes', templatePath, templateDataBuilder);
};

export default registerThemeFormat;
