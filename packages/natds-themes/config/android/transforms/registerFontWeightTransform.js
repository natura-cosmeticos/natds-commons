import { isProp } from '../../shared/helpers';

const fontWeight = {
  100: 'sans-serif-thin',
  200: 'sans-serif-extralight',
  300: 'sans-serif-light',
  400: 'sans-serif',
  500: 'sans-serif-medium',
  600: 'sans-serif-semibold',
  700: 'sans-serif-bold',
  800: 'sans-serif-extrabold',
  900: 'sans-serif-black',
};

export const registerFontWeightTransform = () => ({
  matcher: isProp('fontWeight'),
  name: 'value/font-weight-android',
  transformer: ({ value }) => fontWeight[value],
  transitive: false,
  type: 'value',
});

export default registerFontWeightTransform;
