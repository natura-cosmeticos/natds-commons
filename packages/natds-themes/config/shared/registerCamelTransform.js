import { arrayToCamelCase } from './textHelpers';

export const registerCamelTransform = () => ({
  name: 'name/cti/camel-custom',
  transformer: (prop, options) => {
    const array = options.prefix ? prop.path.unshift(options.prefix) : prop.path;

    return arrayToCamelCase(array);
  },
  type: 'name',
});

export default registerCamelTransform;
