import { isProp } from './helpers';

export const registerPrivatePropertiesFilter = () => ({
  matcher: (prop) => !isProp(prop, 'platform'),
  name: 'privateProperties',
});

export default registerPrivatePropertiesFilter;
