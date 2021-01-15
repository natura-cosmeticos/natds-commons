import { isProp } from '../shared/helpers';

const buildHtmlConfig = (brand, mode) => ({
  actions: ['create_paths_html'],
  buildPath: `build/html/${brand}/`,
  files: [
    {
      destination: `${mode}.html`,
      filter: (prop) => (!isProp(prop, 'platform')),
      format: 'html/colors',
    },
  ],
  transformGroup: 'html',
  transforms: ['name/cti/camel-custom'],
});

export default buildHtmlConfig;
