import { capitalizeWord } from '../shared/textHelpers';
import { isProp } from '../shared/helpers';

const buildAndroidConfig = (brand, mode) => ({
  actions: ['create_resources'],
  buildPath: `build/android/${brand}/`,
  files: [
    {
      destination: 'theme_attributes.xml',
      filter: (prop) => (!isProp(prop, 'platform')),
      format: 'android/attributes',
    },
    {
      brandName: capitalizeWord(brand),
      destination: `theme_${brand}_${mode}.xml`,
      filter: (prop) => (!isProp(prop, 'platform')),
      format: 'android/themes',
      mode: capitalizeWord(mode),
    },
    {
      destination: `${mode}.js`,
      filter: (prop) => (!isProp(prop, 'platform')),
      format: 'javascript/module',
    },
  ],
  transforms: ['name/cti/camel-custom', 'attribute/cti', 'size/dp-custom', 'size/attrType'],
});

export default buildAndroidConfig;
