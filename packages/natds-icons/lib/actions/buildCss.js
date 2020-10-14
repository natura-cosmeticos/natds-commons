import { assocPath } from 'ramda';

export const buildCss = (data) => {
  const { globalConfig: { fontName }, template } = data;

  const css = {
    content: template,
    outputPath: `../../build/${fontName}.css`,
  };

  return assocPath(['outputs', 'css'], css, data);
};

export default buildCss;
