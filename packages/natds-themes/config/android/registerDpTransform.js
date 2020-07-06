const isCategory = (categoryName, { attributes: { category } }) => category === categoryName;

export const isSize = (prop) => (
  !isCategory('color', prop)
  && !isCategory('font', prop)
  && !isCategory('icon', prop)
);

export const registerDpTransform = () => ({
  name: 'size/dp-custom',
  transformer: ({ value }) => `${value}dp`,
  matcher: isSize,
  type: 'value',
});

export default registerDpTransform;
