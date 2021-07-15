import { isOneOfProps } from './helpers';

const notPxProps = [
  'color',
  'fontWeight',
  'fontFamily',
  'elevation',
  'opacity',
  'lineHeight',
  'asset',
  'spectrum',
];

export const registerPxTransform = () => ({
  matcher: (prop) => !isOneOfProps(notPxProps)(prop),
  name: 'unit/px',
  transformer: ({ value }) => `${value}px`,
  transitive: false,
  type: 'value',
});

export default registerPxTransform;
