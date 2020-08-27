export const isCategory = (
  { attributes }, categoryName,
) => attributes.category === categoryName;

export const isItem = (
  { attributes }, itemName,
) => attributes.item === itemName;

export const isProp = (
  { path }, propName,
) => path.includes(propName);

export const flattenProps = (properties) => {
  const mapProps = (item) => Object.values(item).map(checkIfHasName); // eslint-disable-line
  const checkIfHasName = (item, cb) => (item.name ? item : mapProps(item, cb));

  return mapProps(properties).flat(2);
};

export const splitTokensAndComponents = ({
  size, spacing, typography, borderRadius, color, elevation, opacity,
  ...components
}) => ({
  components,
  tokens: {
    borderRadius,
    color,
    elevation,
    opacity,
    size,
    spacing,
    typography,
  },
});

export const flatTokensAndComponents = ({ properties }) => {
  const { tokens, components } = splitTokensAndComponents(properties);

  return {
    components: flattenProps(components),
    tokens: flattenProps(tokens),
  };
};
