import { existsSync, rmdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { execSync } from 'child_process';
import {
  pipe, filter, map, curryN, path, append, pair, join, includes, ifElse,
  not, concat, when, last, converge, equals, of, prepend, unnest,
  head, over, lensIndex,
} from 'ramda';
import { isAssetFile, flattenProps } from '../helpers/helpers';
import { toSnakeCase } from '../helpers';

const assetsSourcePath = 'assets';
const pngSizes = ['1.5x', '2x', '3x', '4x'];

const buildPath = (basePath) => pipe(concat([resolve(basePath)]), join('/'), of);
const buildFileName = curryN(2, pipe(pair, join('.')));
const convergePaths = (destination) => converge(
  pipe(concat, of),
  [
    buildPath(assetsSourcePath),
    pipe(
      ifElse(
        () => includes('android', destination),
        pipe(over(lensIndex(0), toSnakeCase), buildPath(destination)),
        buildPath(destination),
      ),
    ),
  ],
);

const buildAssetPaths = (value, destination) => pipe(
  buildFileName(value),
  of,
  convergePaths(destination),
);

const buildLargerPngPaths = (value, destination) => (extension) => map(pipe(
  of,
  append(buildFileName(value, extension)),
  join('/'),
  of,
  convergePaths(destination),
  head,
))(pngSizes);

const buildAssetPath = (assetsDistPath) => converge(
  (value, extensions) => pipe(
    map(ifElse(
      equals('png'),
      converge(
        concat,
        [buildAssetPaths(value, assetsDistPath), buildLargerPngPaths(value, assetsDistPath)],
      ),
      buildAssetPaths(value, assetsDistPath),
    )),
    unnest,
  )(extensions),
  [
    pipe(path(['original', 'value'])),
    path(['attributes', 'assetOptions', 'extensions']),
  ],
);

const getDirName = pipe(last, dirname);
const createPngDir = (paths) => {
  execSync(`mkdir -p ${getDirName(paths)}`);

  return paths;
};

const logWarningMessage = (asset) => console.log(`Asset ${asset} not found. Check if the file exists in the ${assetsSourcePath} path`);
const execCopy = (assetPaths) => pipe(
  when(pipe(getDirName, existsSync, not), createPngDir),
  prepend('cp'),
  join(' '),
  execSync,
)(assetPaths);

const copyAsset = ifElse(
  pipe(head, existsSync, not),
  pipe(head, logWarningMessage),
  execCopy,
);

const doAction = (dictionary, config) => {
  const assetsDistPath = resolve(`${config.buildPath}assets`);

  if (!existsSync(assetsDistPath)) {
    execSync(`mkdir ${assetsDistPath}`);
  }

  pipe(
    flattenProps,
    filter(isAssetFile),
    map(buildAssetPath(assetsDistPath)),
    unnest,
    map(copyAsset),
  )(dictionary.properties);
};

const undoAction = (dictionary, config) => {
  rmdirSync(resolve(`${config.buildPath}assets`));
};

export const registerCopyAssetsAction = () => ({
  do: doAction,
  name: 'custom_copy_assets',
  undo: undoAction,
});

export default registerCopyAssetsAction;
