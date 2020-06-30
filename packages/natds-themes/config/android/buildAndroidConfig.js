import { capitalizeWord } from '../shared/textHelpers';

const buildAndroidConfig = (brand, mode) => ({
  buildPath: `build/android/${brand}/`,
  files: [
    {
      destination: 'theme_attributes.xml',
      format: 'android/attributes',
    },
    {
      destination: `Theme.${capitalizeWord(brand)}.${capitalizeWord(mode)}.xml`,
      format: 'android/themes',
    },
  ],
  transforms: ['name/cti/camel-custom', 'attribute/cti'],
});

export default buildAndroidConfig;
