import { arrayToCamelCase } from './textHelpers';

export const registerCamelTransform = () => ({
  name: 'name/cti/camel-custom',
  transformer: (prop, options) => {
    const words = prop.path;

    if (options.prefix) {
      words.unshift(options.prefix);
    }

    return arrayToCamelCase(words);
  },
  type: 'name',
});

export default registerCamelTransform;
