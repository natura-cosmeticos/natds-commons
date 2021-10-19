import { capitalizeWord } from '../shared/helpers';

const buildAndroidConfig = (brand, mode) => ({
  actions: ['create_resources', 'custom_copy_assets'],
  buildPath: 'build/android/',
  files: [
    {
      destination: 'theme/theme_attributes.xml',
      filter: 'privateProperties',
      format: 'android/attributes',
    },
    {
      brandName: capitalizeWord(brand),
      destination: `theme/theme_${brand}_${mode}_ssot.xml`,
      filter: 'privateProperties',
      format: 'android/themes',
      mode: capitalizeWord(mode),
    },
    {
      brandName: capitalizeWord(brand),
      destination: `spectrum/spectrum_${brand}_ssot.xml`,
      filter: 'spectrumProperties',
      format: 'android/spectrum',
      mode: capitalizeWord(mode),
    },
    {
      destination: `search/${brand}/${mode}.json`,
      filter: 'tokenSearchProperties',
      format: 'json/flat',
    },
  ],
  transforms: [
    'name/cti/camel-custom',
    'attribute/cti',
    'size/dp-custom',
    'size/attrType',
    'asset/extension',
    'asset/snake',
    'value/font-weight-android',
    'color/android-alpha',
  ],
});

export default buildAndroidConfig;
