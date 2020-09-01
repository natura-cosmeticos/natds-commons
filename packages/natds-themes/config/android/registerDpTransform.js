import { isCategory, isProp } from '../shared/helpers';

export const registerDpTransform = () => ({
  matcher: (prop) => (
    !isCategory(prop, 'color')
    && !isProp(prop, 'fontWeight')
    && !isProp(prop, 'fontFamily')
  ),
  name: 'size/dp-custom',
  transformer: ({ value }) => `${value}dp`,
  type: 'value',
});

export default registerDpTransform;
