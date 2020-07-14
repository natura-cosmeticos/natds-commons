const categoryTypes = {
  color: 'color',
  default: 'dimension',
};

export const registerAttributeTypeTransform = () => ({
  name: 'size/attrType',
  transformer: (prop) => ({
    customOptions: {
      type: categoryTypes[prop.attributes.category] || categoryTypes.default,
    },
  }),
  type: 'attribute',
});

export default registerAttributeTypeTransform;
