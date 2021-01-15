import { isProp } from '../shared/helpers';

export const buildWebConfig = (brand, mode) => ({
  actions: ['create_type_definitions'],
  buildPath: `build/web/${brand}/`,
  files: [{
    destination: `${mode}.json`,
    filter: (prop) => (!isProp(prop, 'platform')),
    format: 'json/nested',
    options: { showFileHeader: false },
  },
  {
    destination: `${mode}.js`,
    filter: (prop) => (!isProp(prop, 'platform')),
    format: 'javascript/es6',
    options: { showFileHeader: false },
  },
  {
    destination: `${mode}-esm.js`,
    filter: (prop) => (!isProp(prop, 'platform')),
    format: 'javascript/module',
  },
  ],
  transforms: ['attribute/cti', 'name/cti/camel-custom', 'color/hex'],
});

export const buildCssConfig = (brand, mode) => ({
  buildPath: `build/web/${brand}/`,
  files: [
    {
      destination: `${mode}.css`,
      format: 'css/variables',
      options: {
        showFileHeader: false,
      },
    },
  ],
  transforms: ['attribute/cti', 'name/cti/camel-custom', 'color/hex', 'unit/px'],
});
