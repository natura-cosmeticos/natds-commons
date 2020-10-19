import { assocPath } from 'ramda';
import { buildIconNamesFromGlyphData } from '../helpers';

export const buildCurrentIconCodes = (data) => {
  if (!data?.glyphsData) return new Error('glyphsData not found');

  const { glyphsData, globalConfig: { iconCodesPath } } = data;

  const content = buildIconNamesFromGlyphData(glyphsData, (item) => item);

  const iconCodes = {
    content: `${JSON.stringify(content, null, '\t')}\n`,
    outputPath: iconCodesPath,
  };

  return assocPath(['outputs', 'iconCodes'], iconCodes, data);
};

export default buildCurrentIconCodes;
