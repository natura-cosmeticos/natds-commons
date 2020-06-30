const spacing = 8;

const scale = {
  large: 6,
  none: 0,
  semi: 4,
  small: 2,
  standard: 3,
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
