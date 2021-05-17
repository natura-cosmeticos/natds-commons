import { isOneOfProps } from '../shared/helpers';

const categoryTypes = {
  asset: 'reference',
  color: 'color',
  default: 'dimension',
  opacity: 'float',
};

const isStringTypeProp = isOneOfProps(['fontFamily', 'fontWeight']);

export const registerAttributeTypeTransform = () => ({
  name: 'size/attrType',
  transformer: (prop) => ({
    customOptions: {
      type: isStringTypeProp(prop) ? 'string' : categoryTypes[prop.attributes.category] || categoryTypes.default,
    },
  }),
  transitive: true,
  type: 'attribute',
});

export default registerAttributeTypeTransform;
