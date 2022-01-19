import { assocPath } from 'ramda'
import { buildIconNamesFromGlyphData } from '../helpers'

export const buildJson = (data) => {
  if (!data?.glyphsData) return new Error('glyphsData not found')

  const { glyphsData, globalConfig: { fontName, outputPath } } = data

  const content = buildIconNamesFromGlyphData(glyphsData, escape)

  const json = {
    content: `${JSON.stringify(content, null, '\t')}\n`,
    outputPath: `${outputPath}/${fontName}.json`
  }

  return assocPath(['outputs', 'json'], json, data)
}

export default buildJson
