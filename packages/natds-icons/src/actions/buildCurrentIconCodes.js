import { assocPath } from 'ramda';
import { buildIconNamesFromGlyphData } from '../helpers';

export const buildCurrentIconCodes = (data) => {
  if (!data?.glyphsData) return new Error('glyphsData not found');

  const { glyphsData, globalConfig: { fontName, outputPath } } = data;

  const content = buildIconNamesFromGlyphData(glyphsData, (item) => item);

  const iconCodes = {
    content: `${JSON.stringify(content, null, '\t')}\n`,
    outputPath: `${outputPath}/${fontName}-codes.json`,
  };

  return assocPath(['outputs', 'iconCodes'], iconCodes, data);
};

export const buildJson = (data) => {
  if (!data?.glyphsData) return new Error('glyphsData not found');

  const { glyphsData, globalConfig: { fontName, outputPath } } = data;

  const content = buildIconNamesFromGlyphData(glyphsData, escape);

  const json = {
    content: `${JSON.stringify(content, null, '\t')}\n`,
    outputPath: `${outputPath}/${fontName}.json`,
  };

  return assocPath(['outputs', 'json'], json, data);
};
