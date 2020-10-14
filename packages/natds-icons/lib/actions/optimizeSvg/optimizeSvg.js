import fs from 'fs';
import path from 'path';
import SVGO from 'svgo';
import R, { assocPath, map, pipe, hasPath } from 'ramda';
import { svgoConfig } from './svgoConfig';

const writeCleanedSvg = (iconsData) => ({ data, path: filePath }) => {
  const outputPath = path.resolve(iconsData.globalConfig.cleanedSvgOutput, path.basename(filePath));

  fs.writeFileSync(outputPath, data);

  return outputPath;
};

const cleanSvg = (svgo) => (filePath) => {
  const svgContent = fs.readFileSync(filePath);

  return svgo.optimize(svgContent, { path: filePath });
};

const handleCleanedSvgs = (iconsData) => (response) => {
  const outputPaths = map(writeCleanedSvg(iconsData), response);

  return assocPath(['svgPaths', 'cleaned'], outputPaths, iconsData);
};

export const optimizeSvg = (iconsData) => {
  const dataPath = ['svgPaths', 'raw'];

  if (!hasPath(['svgPaths', 'raw'], iconsData)) {
    return Promise.reject(new Error('svgPaths not found'));
  }

  const svgo = new SVGO(svgoConfig);

  const promises = pipe(
    R.path(dataPath),
    map(cleanSvg(svgo)),
  );

  return Promise.all(promises(iconsData)).then(handleCleanedSvgs(iconsData));
};

export default optimizeSvg;
