import { isOneOfProps } from './helpers';

export const registerPxTransform = () => ({
  matcher: (prop) => {
    const notPxProps = [
      'color',
      'fontWeight',
      'fontFamily',
      'elevation',
      'opacity',
    ];

    return !isOneOfProps(prop, notPxProps);
  },
  name: 'unit/px',
  transformer: ({ value }) => `${value}px`,
  type: 'value',
});

export default registerPxTransform;
