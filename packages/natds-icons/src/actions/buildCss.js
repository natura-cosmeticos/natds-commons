import { assocPath } from 'ramda'

export const buildCss = (data) => {
  if (!data?.template) return new Error('template not found')

  const { globalConfig: { fontName, outputPath }, template } = data

  const content = template.replace('font-display: auto;', 'font-display: swap;')

  const css = {
    content,
    outputPath: `${outputPath}/${fontName}.css`
  }

  return assocPath(['outputs', 'css'], css, data)
}

export default buildCss
