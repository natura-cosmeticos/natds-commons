import path from 'path';
import { assocPath } from 'ramda';

const createFontOutput = (data, fontExtension) => {
  if (!data[fontExtension]) return new Error(`${fontExtension} data not found`);

  const { globalConfig: { fontName, outputPath } } = data;

  const fontData = {
    content: data[fontExtension],
    outputPath: path.resolve(outputPath, 'fonts', `${fontName}.${fontExtension}`),
  };

  return assocPath(['outputs', fontExtension], fontData, data);
};

export const buildFonts = (data) => {
  if (!data?.globalConfig?.fontExtensions) return new Error('fontExtensions data not found');

  const { globalConfig: { fontExtensions } } = data;
  const fonts = fontExtensions.reduce(createFontOutput, data);

  return fonts;
};

export default buildFonts;
