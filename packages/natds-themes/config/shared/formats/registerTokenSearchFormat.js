import path from 'path'
import { pipe, filter, map } from 'ramda'
import Handlebars from 'handlebars'
import { formatBuilder } from '../helpers/formatBuilder'
import { flattenProps } from '../helpers'

export const registerTokenSearchFormat = () => {
  const templatePath = path.resolve(__dirname, '../templates/tokensSearch.hbs')

  return formatBuilder('tokenSearch/template', templatePath, ({ properties }) => {
    const allTokens = pipe(
      flattenProps,
      map((item) => ([item.name, item.value]))
    )(properties)

    const deprecatedTokens = pipe(
      flattenProps,
      filter((item) => item.deprecated),
      map((item) => ([item.name, item.value]))
    )(properties)

    Handlebars.registerHelper('toJSON', (prop) => JSON.stringify(prop))

    return ({
      allTokens: Object.fromEntries(allTokens),
      deprecatedTokens: Object.fromEntries(deprecatedTokens)
    })
  })
}

export default registerTokenSearchFormat
