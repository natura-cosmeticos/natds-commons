import { filterCategory, isProp } from '../shared/filters';

export const registerDpTransform = () => ({
  matcher: (prop) => (
    !filterCategory(prop, 'color')
    && !isProp(prop, 'fontWeight')
    && !isProp(prop, 'fontFamily')
  ),
  name: 'size/dp-custom',
  transformer: ({ value }) => `${value}dp`,
  type: 'value',
});

export default registerDpTransform;
