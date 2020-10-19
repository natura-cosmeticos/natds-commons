import fs from 'fs';
import { path, hasPath, assocPath } from 'ramda';

export const getPreviousCodesFromPaths = (nextSvgPaths, previousCodes) => (acc, iconName) => (
  nextSvgPaths.find((iconPath) => iconPath.includes(iconName))
    ? {
      ...acc,
      [iconName]: previousCodes[iconName],
    }
    : acc
);

const getPreviousCodesForNextBuild = (previousCodesFilePath, nextSvgPaths) => {
  const previousCodes = JSON.parse(fs.readFileSync(previousCodesFilePath));

  return Object
    .keys(previousCodes)
    .reduce(getPreviousCodesFromPaths(nextSvgPaths, previousCodes), {});
};

export const buildPreviousIconCodes = (data) => {
  const dataPath = ['globalConfig', 'iconCodesPath'];

  if (!hasPath(dataPath, data)) return new Error('iconCodesPath missing');

  const iconCodesJsonPath = path(dataPath, data);

  const content = fs.existsSync(iconCodesJsonPath)
    ? getPreviousCodesForNextBuild(iconCodesJsonPath, data.svgPaths.cleaned)
    : {};

  return assocPath(['previousIconCodes'], content, data);
};

export default buildPreviousIconCodes;
