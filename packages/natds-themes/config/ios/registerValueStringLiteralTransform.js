import { isProp } from '../shared/helpers';

export const registerValueStringLiteralTransform = () => ({
  name: 'value/string-literal',
  transformer: (prop) => (
    typeof prop.value === 'string' && !isProp(prop, 'fontWeight') && !isProp(prop, 'shadowColor')
      ? `"${prop.value}"`
      : prop.value
  ),
  type: 'value',
});

export default registerValueStringLiteralTransform;
