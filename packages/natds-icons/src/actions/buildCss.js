import { assocPath } from 'ramda';

export const buildCss = (data) => {
  const { globalConfig: { fontName, outputPath }, template } = data;

  const css = {
    content: template,
    outputPath: `${outputPath}/${fontName}.css`,
  };

  return assocPath(['outputs', 'css'], css, data);
};

export default buildCss;
