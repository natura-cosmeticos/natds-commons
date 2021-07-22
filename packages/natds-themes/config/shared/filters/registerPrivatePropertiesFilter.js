import { isPrivateProp } from '../helpers';

export const registerPrivatePropertiesFilter = () => ({
  matcher: (prop) => !isPrivateProp(prop),
  name: 'privateProperties',
});

export default registerPrivatePropertiesFilter;
