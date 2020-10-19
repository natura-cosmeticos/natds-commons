/* eslint-disable consistent-return */

import glob from 'glob';
import { assocPath, hasPath, path } from 'ramda';

export const buildSvgPaths = (data = {}) => new Promise((resolve, reject) => {
  const inputDataPath = ['globalConfig', 'rawSvgInput'];

  if (!hasPath(inputDataPath, data)) return reject(new Error('rawSvgInput was not provided'));

  glob(path(inputDataPath, data), (readFilesError, filenames) => {
    if (readFilesError) return reject(readFilesError);

    return resolve(assocPath(['svgPaths', 'raw'], filenames, data));
  });
});

export default buildSvgPaths;
