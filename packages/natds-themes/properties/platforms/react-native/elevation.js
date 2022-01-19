/* eslint-disable sort-keys */
import { elevation as androidElevations } from '../android/elevation.json'
import { elevation as iosElevations } from '../ios/elevation.json'

module.exports = {
  elevation: {
    none: {
      ...iosElevations.none,
      elevation: androidElevations.none
    },
    micro: {
      ...iosElevations.micro,
      elevation: androidElevations.micro
    },
    tiny: {
      ...iosElevations.tiny,
      elevation: androidElevations.tiny
    },
    small: {
      ...iosElevations.small,
      elevation: androidElevations.small
    },
    medium: {
      ...iosElevations.medium,
      elevation: androidElevations.medium
    },
    large: {
      ...iosElevations.large,
      elevation: androidElevations.large
    },
    largeX: {
      ...iosElevations.largeX,
      elevation: androidElevations.largeX
    },
    largeXX: {
      ...iosElevations.largeXX,
      elevation: androidElevations.largeXX
    },
    huge: {
      ...iosElevations.huge,
      elevation: androidElevations.huge
    },
    hugeX: {
      ...iosElevations.hugeX,
      elevation: androidElevations.hugeX
    },
    hugeXX: {
      ...iosElevations.hugeXX,
      elevation: androidElevations.hugeXX
    }
  }
}
