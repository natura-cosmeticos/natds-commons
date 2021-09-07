import { isProp } from '../helpers';

export const registerFontFamilyStringTransform = () => ({
  matcher: isProp('fontFamily'),
  name: 'fontFamily/string',
  transformer: ({ value }) => `"${value}"`,
  transitive: false,
  type: 'value',
});

export default registerFontFamilyStringTransform;
