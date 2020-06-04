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
  transformGroup: 'android',
  transforms: ['name/cti/camel'],
});

export default buildAndroidConfig;
