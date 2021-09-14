import { isDimensionWithUnit, isSpDimension } from '../shared/helpers';

export const registerDpTransform = () => ({
  matcher: isDimensionWithUnit,
  name: 'size/dp-custom',
  transformer: (prop) => `${prop.value}${isSpDimension(prop) ? 'sp' : 'dp'}`,
  transitive: false,
  type: 'value',
});

export default registerDpTransform;
