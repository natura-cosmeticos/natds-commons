import { isProp } from '../../shared/helpers';

const fontWeight = {
  100: '.ultraLight',
  200: '.thin',
  300: '.light',
  400: '.regular',
  500: '.medium',
  600: '.semibold',
  700: '.bold',
  800: '.heavy',
  900: '.black',
};

export const registerFontWeightTransform = () => ({
  matcher: isProp('fontWeight'),
  name: 'value/font-weight-ios',
  transformer: ({ value }) => fontWeight[value],
  transitive: false,
  type: 'value',
});

export default registerFontWeightTransform;
