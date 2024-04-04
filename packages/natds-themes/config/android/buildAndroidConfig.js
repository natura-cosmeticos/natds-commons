import { capitalizeWord, camelToSnakeCase, excludePrimitiveTokens } from '../shared/helpers'
import { filterPrivateAndFontFamilyProps, filterSearchAndFontFamilyProps } from './helpers/helpers'

export const buildAndroidConfig = (brand, mode) => {
  const brandName = camelToSnakeCase(brand)

  return {
    actions: ['create_resources', 'convert_drawables', 'custom_copy_assets'],
    buildPath: 'build/android/',
    files: [
      {
        destination: 'theme/theme_attributes.xml',
        filter: filterPrivateAndFontFamilyProps,
        format: 'android/attributes'
      },
      {
        brandName: capitalizeWord(brand),
        destination: `theme/theme_${brandName}_${mode}_ssot.xml`,
        filter: (token) => excludePrimitiveTokens(token) && filterPrivateAndFontFamilyProps,
        format: 'android/themes',
        mode: capitalizeWord(mode)
      },
      {
        brandName: capitalizeWord(brand),
        destination: `spectrum/spectrum_${brandName}_ssot.xml`,
        filter: 'spectrumProperties',
        format: 'android/spectrum',
        mode: capitalizeWord(mode)
      },
      {
        destination: `search/${brandName}/${mode}.json`,
        filter: filterSearchAndFontFamilyProps,
        format: 'tokenSearch/template'
      }
    ],
    transforms: [
      'name/cti/camel-custom',
      'attribute/cti',
      'size/dp-custom',
      'size/attrType',
      'asset/extension',
      'asset/snake',
      'value/font-weight-android',
      'color/android-alpha'
    ]
  }
}

export default buildAndroidConfig
