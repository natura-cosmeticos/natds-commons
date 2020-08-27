/* eslint-disable sort-keys */
import { elevation as androidElevations } from '../android/elevation.json';
import { elevation as iosElevations } from '../ios/elevation.json';

const shadowColor = {
  value: '#000000',
};

module.exports = {
  elevation: {
    none: {
      ...iosElevations.none,
      elevation: androidElevations.none,
      shadowColor,
    },
    micro: {
      ...iosElevations.micro,
      elevation: androidElevations.micro,
      shadowColor,
    },
    tiny: {
      ...iosElevations.tiny,
      elevation: androidElevations.tiny,
      shadowColor,
    },
    small: {
      ...iosElevations.small,
      elevation: androidElevations.small,
      shadowColor,
    },
    medium: {
      ...iosElevations.medium,
      elevation: androidElevations.medium,
      shadowColor,
    },
    large: {
      ...iosElevations.large,
      elevation: androidElevations.large,
      shadowColor,
    },
    largeX: {
      ...iosElevations.largeX,
      elevation: androidElevations.largeX,
      shadowColor,
    },
    largeXX: {
      ...iosElevations.largeXX,
      elevation: androidElevations.largeXX,
      shadowColor,
    },
    huge: {
      ...iosElevations.huge,
      elevation: androidElevations.huge,
      shadowColor,
    },
    hugeX: {
      ...iosElevations.hugeX,
      elevation: androidElevations.hugeX,
      shadowColor,
    },
    hugeXX: {
      ...iosElevations.hugeXX,
      elevation: androidElevations.hugeXX,
      shadowColor,
    },
  },
};
