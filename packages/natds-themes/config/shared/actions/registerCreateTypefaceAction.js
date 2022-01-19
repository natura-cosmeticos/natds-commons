import fs from 'fs'
import {
  pipe, filter, map, join, prop, uniq
} from 'ramda'
import { isFontAssetFile, flattenProps, readAsset } from '../helpers/helpers'

const readCss = (fontName) => readAsset(`${fontName}.css`)

const doAction = (dictionary, config) => {
  const fontFace = pipe(
    flattenProps,
    filter(isFontAssetFile),
    map(prop('value')),
    uniq,
    map(readCss),
    join('\n')
  )(dictionary.properties)

  const { brand, buildPath } = config
  const outputPath = `${buildPath}assets/${brand}_fonts.css`

  fs.writeFileSync(outputPath, fontFace)
}

const undoAction = (dictionary, config) => {
  const { brand, buildPath } = config
  const outputPath = `${buildPath}assets/${brand}_fonts.css`

  return fs.unlinkSync(outputPath)
}

export const registerCreateTypefaceAction = () => ({
  do: doAction,
  name: 'create_type_face',
  undo: undoAction
})

export default registerCreateTypefaceAction
