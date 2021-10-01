import { isProp } from '../../shared/helpers';

export const registerConvertFontWeightToString = () => ({
  matcher: isProp('fontWeight'),
  name: 'value/font-weight-rn',
  transformer: ({ value }) => value.toString(),
  transitive: false,
  type: 'value',
});

export default registerConvertFontWeightToString;
