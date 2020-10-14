import { assocPath } from 'ramda';
import { buildIconNamesFromGlyphData } from '../helpers';

export const buildCurrentIconCodes = (data) => {
  if (!data?.glyphsData) return new Error('glyphsData not found');

  const content = buildIconNamesFromGlyphData(data.glyphsData, (item) => item);
  
  const iconCodes = {
    outputPath: `../../build/${data.globalConfig.fontName}-codes.json`,
    content: `${JSON.stringify(content, null, '\t')}\n`,
  }

  return assocPath(['outputs', 'iconCodes'], iconCodes, data)
}

export const buildJson = (data) => {
  if (!data?.glyphsData) return new Error('glyphsData not found');

  const content = buildIconNamesFromGlyphData(data.glyphsData, escape);

  const json = {
    outputPath: `../../build/${data.globalConfig.fontName}.json`,
    content: `${JSON.stringify(content, null, '\t')}\n`,
  }

  return assocPath(['outputs', 'json'], json, data)
}

