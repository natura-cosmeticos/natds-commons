import { capitalizeWord } from '../shared/textHelpers';

const buildAndroidConfig = (brand, mode) => ({
  actions: ['create_resources'],
  buildPath: `build/android/${brand}/`,
  files: [
    {
      destination: 'theme_attributes.xml',
      filter: 'privateProperties',
      format: 'android/attributes',
    },
    {
      brandName: capitalizeWord(brand),
      destination: `theme_${brand}_${mode}.xml`,
      filter: 'privateProperties',
      format: 'android/themes',
      mode: capitalizeWord(mode),
    },
    {
      destination: `${mode}.js`,
      filter: 'privateProperties',
      format: 'javascript/module',
    },
  ],
  transforms: ['name/cti/camel-custom', 'attribute/cti', 'size/dp-custom', 'size/attrType'],
});

export default buildAndroidConfig;
