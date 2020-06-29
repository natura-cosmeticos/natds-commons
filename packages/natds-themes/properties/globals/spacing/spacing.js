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
    large: {
      value: spacing * scale.xLarge,
    },
    micro: {
      value: spacing / 2,
    },
    none: {
      value: scale.none,
    },
    semi: {
      value: spacing * scale.semi,
    },
    small: {
      value: spacing * scale.small,
    },
    standard: {
      value: spacing * scale.standard,
    },
    tiny: {
      value: spacing,
    },
    xLarge: {
      value: spacing * scale.xLarge,
    },
  },
};
