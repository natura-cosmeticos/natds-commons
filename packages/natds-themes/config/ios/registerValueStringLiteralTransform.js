import { isFontWeight } from './registerAttributeTypeTransform';

export const registerValueStringLiteralTransform = () => ({
  name: 'value/string-literal',
  transformer: (prop) => (
    typeof prop.value === 'string' && !isFontWeight(prop)
      ? `"${prop.value}"`
      : prop.value
  ),
  type: 'value',
});

export default registerValueStringLiteralTransform;
