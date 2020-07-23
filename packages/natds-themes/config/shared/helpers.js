export const filterCategory = (
  { attributes }, categoryName,
) => attributes.category === categoryName;

export const isProp = (
  { path }, propName,
) => path.includes(propName);

export const flattenProps = (properties) => {
  const mapProps = (item) => Object.values(item).map(checkIfHasName); // eslint-disable-line
  const checkIfHasName = (item, cb) => (item.name ? item : mapProps(item, cb));

  return mapProps(properties).flat(2);
};

export const splitTokensAndComponents = ({
  size, spacing, typography, borderRadius, color,
  ...components
}) => ({
  components,
  tokens: {
    borderRadius,
    color,
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
