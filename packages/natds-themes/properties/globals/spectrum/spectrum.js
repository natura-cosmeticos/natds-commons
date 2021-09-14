import colors from 'open-color/open-color.json';
import { map, omit, pipe } from 'ramda';
import { buildColors } from '../../../config/shared/helpers';

const baseColors = {
  dark: { value: colors.black },
  light: { value: colors.white },
};

const spectrum = pipe(map(buildColors), omit(['black', 'white', 'gray', 'red']))(colors);

module.exports = {
  spectrum: {
    ...baseColors,
    ...spectrum,
  },
};
