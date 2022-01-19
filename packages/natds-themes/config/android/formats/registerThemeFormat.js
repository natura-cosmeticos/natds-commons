import path from 'path'
import { allPass, filter, complement } from 'ramda'
import {
  flattenProps, isLogoAssetFile, formatBuilder, isFontAssetFile
} from '../../shared/helpers'
import {
  isDimension, createEncodedHashFromValue, isColor, mapFilteredValues
} from '../helpers/helpers'

const encodeValue = (item) => ({ ...item, value: createEncodedHashFromValue(item.value) })

const templateDataBuilder = (
  { properties }, platform, { brandName, mode }
) => {
  const props = flattenProps(properties)

  const filterPropsWithoutPrefix = allPass([
    complement(isColor),
    complement(isDimension),
    complement(isLogoAssetFile),
    complement(isFontAssetFile)
  ])

  return {
    brandName,
    colors: mapFilteredValues(props, isColor, encodeValue),
    dimensions: mapFilteredValues(props, isDimension, encodeValue),
    drawables: filter(isLogoAssetFile)(props),
    fonts: filter(isFontAssetFile)(props),
    materialMode: mode === 'Light' ? 'Light' : 'DayNight',
    mode,
    properties: filter(filterPropsWithoutPrefix)(props)
  }
}

const registerThemeFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/themes.hbs')

  return formatBuilder('android/themes', templatePath, templateDataBuilder)
}

export default registerThemeFormat
