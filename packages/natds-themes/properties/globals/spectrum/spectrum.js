import colors from 'open-color/open-color.json';
import { map, omit, pipe } from 'ramda';

const buildColors = (value) => {
  if (!Array.isArray(value)) {
    return { value };
  }

  return value.reduce((acc, color, index) => ({
    ...acc,
    ...{ [index === 0 ? '50' : `${index}00`]: { value: color } },
  }
  ), {});
};

const baseColors = {
  dark: { value: colors.black },
  light: { value: colors.white },
};

const spectrum = pipe(map(buildColors), omit(['black', 'white']))(colors);

module.exports = {
  spectrum: {
    ...baseColors,
    ...spectrum,
  },
};
