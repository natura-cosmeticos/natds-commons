/* eslint-disable sort-keys */

const spacing = 8;

const scale = {
  none: 0,
  small: 2,
  standard: 3,
  semi: 4,
  large: 6,
  xLarge: 8,
};

module.exports = {
  spacing: {
    none: {
      value: scale.none,
    },
    micro: {
      value: spacing / 2,
    },
    tiny: {
      value: spacing,
    },
    small: {
      value: spacing * scale.small,
    },
    standard: {
      value: spacing * scale.standard,
    },
    semi: {
      value: spacing * scale.semi,
    },
    large: {
      value: spacing * scale.large,
    },
    xLarge: {
      value: spacing * scale.xLarge,
    },
  },
};
