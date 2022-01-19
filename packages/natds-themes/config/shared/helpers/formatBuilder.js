import { compileTemplate } from './templateHelpers'

export const formatBuilder = (name, templatePath, templateDataBuilder) => {
  const template = compileTemplate(templatePath)

  function formatter(dictionary, platform) {
    const templateData = templateDataBuilder(dictionary, platform, this)

    return template(templateData)
  }

  return {
    formatter,
    name
  }
}

export default {
  formatBuilder
}
