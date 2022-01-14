import { capitalizeWord, camelToSnakeCase, filterDeprecatedToken } from '../shared/helpers';
import { filterPrivateAndFontFamilyProps, filterSearchAndFontFamilyProps } from './helpers/helpers';

export const buildAndroidConfig = (brand, mode) => {
  const brandName = camelToSnakeCase(brand);

  return {
    actions: ['create_resources', 'convert_drawables', 'custom_copy_assets'],
    buildPath: 'build/android/',
    files: [
      {
        destination: 'theme/theme_attributes.xml',
        filter: filterPrivateAndFontFamilyProps,
        format: 'android/attributes',
      },
      {
        brandName: capitalizeWord(brand),
        destination: `theme/theme_${brandName}_${mode}_ssot.xml`,
        filter: filterPrivateAndFontFamilyProps,
        format: 'android/themes',
        mode: capitalizeWord(mode),
      },
      {
        brandName: capitalizeWord(brand),
        destination: `spectrum/spectrum_${brandName}_ssot.xml`,
        filter: 'spectrumProperties',
        format: 'android/spectrum',
        mode: capitalizeWord(mode),
      },
      {
        destination: `search/${brandName}/${mode}.json`,
        filter: filterSearchAndFontFamilyProps,
        format: 'json/flat',
      },
      {
        destination: `search/${brandName}/${mode}-deprecated.json`,
        filter: filterDeprecatedToken,
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
  };
};

export default buildAndroidConfig;
