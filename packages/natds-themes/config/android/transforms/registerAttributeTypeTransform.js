import { isOneOfProps, isAssetFile } from '../../shared/helpers';

const categoryTypes = {
  color: 'color',
  default: 'dimension',
  opacity: 'float',
  spectrum: 'color',
};

const isStringTypeProp = (prop) => isOneOfProps(['fontFamily', 'fontWeight'])(prop);

export const getType = (prop) => {
  if (isStringTypeProp(prop)) return 'string';
  if (isAssetFile(prop)) return 'reference';

  return categoryTypes[prop.attributes.category] || categoryTypes.default;
};

export const registerAttributeTypeTransform = () => ({
  name: 'size/attrType',
  transformer: (prop) => ({
    customOptions: {
      type: getType(prop),
    },
  }),
  transitive: true,
  type: 'attribute',
});

export default registerAttributeTypeTransform;
