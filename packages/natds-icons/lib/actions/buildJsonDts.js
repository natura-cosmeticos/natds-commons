import { assocPath } from 'ramda';
import JsonToTS from 'json-to-ts';

export const buildJsonDts = (data) => {
  if (!data?.outputs?.json?.content) return new Error('json not found')

  const jsonDts = JsonToTS(JSON.parse(data.outputs.json.content))
    .reduce((types, typeInterface) => types.concat(typeInterface), '')
    .concat('\ndeclare const styles : RootObject;\n\nexport = styles;\n');

  const jsonDtsOutput = {
    outputPath: `../../build/${data.globalConfig.fontName}.json.d.ts`,
    content: jsonDts,
  };

  return assocPath(['outputs', 'jsonDts'], jsonDtsOutput, data)
}

export default buildJsonDts;
