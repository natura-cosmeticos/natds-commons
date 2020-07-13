import { isProp } from '../shared/filters';

const types = {
  color: 'UIColor',
  float: 'CGFloat',
  fontWeight: 'UIFont.Weight',
  int: 'CGFloat',
  number: 'CGFloat',
  string: 'String',
};

const getType = (prop) => types[
  Object.keys(types).find((type) => isProp(prop, type)) || typeof prop.value
];

export const isFontWeight = ({ path }) => path.includes('fontWeight');

const transformer = (prop) => {
  const type = getType(prop);

  return {
    customOptions: {
      includeType: isProp(prop, 'fontWeight') || (type !== 'String' && type !== 'UIColor'),
      type,
    },
  };
};

export const registerAttributeTypeTransform = () => ({
  name: 'attribute/type',
  transformer,
  type: 'attribute',
});

export default registerAttributeTypeTransform;
