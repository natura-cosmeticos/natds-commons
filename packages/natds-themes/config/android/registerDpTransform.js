import { filterCategory } from '../shared/filters';

export const registerDpTransform = () => ({
  matcher: (prop) => !filterCategory(prop, 'color'),
  name: 'size/dp-custom',
  transformer: ({ value }) => `${value}dp`,
  type: 'value',
});

export default registerDpTransform;
