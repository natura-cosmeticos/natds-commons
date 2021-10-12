const tokenCategories = [
  'size',
  'spacing',
  'typography',
  'borderRadius',
  'color',
  'elevation',
  'opacity',
];

export const registerTokenSearchPropertiesFilter = () => ({
  matcher: ({ attributes: { category } }) => tokenCategories.includes(category),
  name: 'tokenSearchProperties',
});

export default registerTokenSearchPropertiesFilter;
