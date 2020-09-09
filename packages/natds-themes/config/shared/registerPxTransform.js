import { isOneOfProps } from './helpers';

const notPxProps = [
  'color',
  'fontWeight',
  'fontFamily',
  'elevation',
  'opacity',
  'lineHeight',
];

export const registerPxTransform = () => ({
  matcher: (prop) => !isOneOfProps(prop, notPxProps),
  name: 'unit/px',
  transformer: ({ value }) => `${value}px`,
  type: 'value',
});

export default registerPxTransform;
