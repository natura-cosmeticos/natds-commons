/* eslint-disable max-lines-per-function */

import { capitalizeWord } from '../shared/textHelpers';

const buildAndroidConfig = (brand, mode) => ({
  buildPath: `build/android/${brand}/`,
  files: [
    {
      destination: 'theme_attributes.xml',
      format: 'android/attributes',
    },
    {
      brandName: capitalizeWord(brand),
      destination: `theme_${brand}_${mode}.xml`,
      format: 'android/themes',
      mode: capitalizeWord(mode),
    },
  ],
  transforms: ['name/cti/camel-custom', 'attribute/cti'],
});

export default buildAndroidConfig;
