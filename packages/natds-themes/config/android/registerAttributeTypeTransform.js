import { isOneOfProps } from '../shared/helpers';

const categoryTypes = {
  color: 'color',
  default: 'dimension',
  opacity: 'float',
};

const isStringTypeProp = (prop) => isOneOfProps(prop, ['fontFamily', 'fontWeight']);

export const registerAttributeTypeTransform = () => ({
  name: 'size/attrType',
  transformer: (prop) => ({
    customOptions: {
      type: isStringTypeProp(prop) ? 'string' : categoryTypes[prop.attributes.category] || categoryTypes.default,
    },
  }),
  type: 'attribute',
});

export default registerAttributeTypeTransform;
