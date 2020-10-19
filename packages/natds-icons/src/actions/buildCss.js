import { assocPath } from 'ramda';

export const buildCss = (data) => {
  if (!data?.template) return new Error('template not found');

  const { globalConfig: { fontName, outputPath }, template } = data;

  const css = {
    content: template,
    outputPath: `${outputPath}/${fontName}.css`,
  };

  return assocPath(['outputs', 'css'], css, data);
};

export default buildCss;
