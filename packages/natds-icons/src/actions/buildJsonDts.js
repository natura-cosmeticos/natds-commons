import { assocPath } from 'ramda'
import JsonToTS from 'json-to-ts'

export const buildJsonDts = (data) => {
  if (!data?.outputs?.json?.content) return new Error('json not found')

  const {
    outputs: { json: { content } },
    globalConfig: { fontName, outputPath }
  } = data

  const jsonDts = JsonToTS(JSON.parse(content))
    .reduce((types, typeInterface) => types.concat(typeInterface), '')
    .concat('\ndeclare const styles : RootObject;\n\nexport default styles;\n')

  const jsonDtsOutput = {
    content: jsonDts,
    outputPath: `${outputPath}/${fontName}.json.d.ts`
  }

  return assocPath(['outputs', 'jsonDts'], jsonDtsOutput, data)
}

export default buildJsonDts
