import colors from 'open-color/open-color.json';
import {
  map,
  reverse,
  pipe,
  omit,
} from 'ramda';

const buildColors = (value) => {
  if (!Array.isArray(value)) {
    return { value };
  }

  const reversedValues = reverse(value);

  return reversedValues.reduce((acc, color, index) => ({
    ...acc,
    ...{ [index]: { value: color } },
  }), {});
};

const baseColors = {
  dark: { value: colors.white },
  light: { value: colors.black },
};

const spectrum = pipe(map(buildColors), omit(['black', 'white']))(colors);

module.exports = {
  spectrum: {
    ...baseColors,
    ...spectrum,
  },
};
