import { isProp } from '../shared/helpers';

const buildReactNativeConfig = (brand, mode) => ({
  actions: ['create_type_definitions'],
  buildPath: `build/react-native/${brand}/`,
  files: [
    {
      destination: `${mode}.json`,
      filter: (prop) => (!isProp(prop, 'platform')),
      format: 'json/nested',
    },
    {
      destination: `${mode}.js`,
      filter: (prop) => (!isProp(prop, 'platform')),
      format: 'javascript/module',
    },
  ],
  transforms: ['attribute/cti', 'name/cti/pascal', 'color/hex', 'name/cti/camel-custom'],
});

export default buildReactNativeConfig;
