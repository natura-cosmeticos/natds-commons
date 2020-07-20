import { isProp } from './helpers';

const pxProps = [
  'size',
  'spacing',
  'fontSize',
  'letterSpacing',
  'borderRadius',
];

export const registerPxTransform = () => ({
  name: 'value/px',
  transformer: (prop) => (
    pxProps.find((propName) => isProp(prop, propName))
      ? `${prop.value}px`
      : prop.value
  ),
  type: 'value',
});

export default registerPxTransform;
