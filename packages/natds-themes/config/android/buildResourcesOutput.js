import fs from 'fs'
import path from 'path'
import { compileTemplate, registerTemplateHeaderHelper } from '../shared/helpers'
import { createEncodedHashFromValue } from './helpers/helpers'

const buildEncodedObjectFromValue = (value) => ({ [createEncodedHashFromValue(value)]: value })

const buildUniqueEncodedArray = (values) => {
  const uniqueValuesKeys = [...new Set(JSON.parse(values))]

  return uniqueValuesKeys.map(buildEncodedObjectFromValue)
}

export const buildResourcesFromThemeValues = (resourceType) => {
  const outputPath = path.resolve(__dirname, '../../build/android/theme')
  const templatePath = path.resolve(__dirname, `./formats/templates/${resourceType}.hbs`)
  const resourceFilePath = `${outputPath}/${resourceType}.json`
  const themeValues = fs.readFileSync(resourceFilePath)

  const template = compileTemplate(templatePath)

  const colorsXml = template({ [resourceType]: buildUniqueEncodedArray(themeValues) })

  fs.writeFileSync(`${outputPath}/${resourceType}_ssot.xml`, colorsXml)
  fs.unlinkSync(resourceFilePath)
}

export const buildResourcesOutput = () => {
  registerTemplateHeaderHelper()
  buildResourcesFromThemeValues('colors')
  buildResourcesFromThemeValues('dimens')
}
