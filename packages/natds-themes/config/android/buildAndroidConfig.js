import { capitalizeWord } from '../shared/helpers';

const buildAndroidConfig = (brand, mode) => ({
  actions: ['create_resources', 'custom_copy_assets'],
  buildPath: 'build/android/',
  files: [
    {
      destination: `${brand}/theme_attributes.xml`,
      filter: 'privateProperties',
      format: 'android/attributes',
    },
    {
      brandName: capitalizeWord(brand),
      destination: `${brand}/theme_${brand}_${mode}.xml`,
      filter: 'privateProperties',
      format: 'android/themes',
      mode: capitalizeWord(mode),
    },
    {
      brandName: capitalizeWord(brand),
      destination: `spectrum/${brand}/spectrum_${brand}_${mode}.xml`,
      filter: 'spectrumProperties',
      format: 'android/spectrum',
      mode: capitalizeWord(mode),
    },
    {
      destination: `${brand}/${mode}.js`,
      filter: 'privateProperties',
      format: 'javascript/module',
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
  ],
});

export default buildAndroidConfig;
