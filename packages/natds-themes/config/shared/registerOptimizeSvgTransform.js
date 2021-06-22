import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';
import { isAsset, readAsset } from './helpers';

const plugins = [
  'cleanupAttrs',
  'cleanupEnableBackground',
  'cleanupIDs',
  'cleanupNumericValues',
  'collapseGroups',
  'convertColors',
  'convertEllipseToCircle',
  'convertPathData',
  'convertShapeToPath',
  'convertTransform',
  'inlineStyles',
  'mergePaths',
  'mergeStyles',
  'minifyStyles',
  'moveElemsAttrsToGroup',
  'moveGroupAttrsToElems',
  'removeComments',
  'removeDesc',
  'removeDoctype',
  'removeEditorsNSData',
  'removeEmptyAttrs',
  'removeEmptyContainers',
  'removeEmptyText',
  'removeHiddenElems',
  'removeMetadata',
  'removeNonInheritableGroupAttrs',
  'removeTitle',
  'removeUnusedNS',
  'removeUselessDefs',
  'removeUselessStrokeAndFill',
  'removeViewBox',
  'removeXMLProcInst',
  'sortDefsChildren',
];

export const execPattern = (pattern, data) => {
  const matches = [];
  const regex = new RegExp(pattern, 'gm');
  let match;

  do {
    match = regex.exec(data);
    if (match && match.groups) {
      matches.push(match.groups);
    }
  } while (match);

  return matches;
};

export const convertBase64ToExternalImage = (assetName) => (acc, item, index) => {
  const assetRemoteBaseUrl = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets/';
  const imageName = `${assetName}-embed-image-${index}.png`;

  fs.writeFileSync(path.join(__dirname, '../../assets/logo', imageName), item.imageData, 'base64');

  return acc.replace(`data:image/png;base64,${item.imageData}`, `${assetRemoteBaseUrl}${imageName}`);
};

const transformer = (token) => {
  const assetName = `${token.original.value}.svg`;

  const svgInline = readAsset(assetName);

  let optimizedSvg = optimize(svgInline, { plugins }).data;

  const matches = execPattern('data:image/png;base64,(?<imageData>[^"\']+)', optimizedSvg);

  if (matches.length) {
    optimizedSvg = matches.reduce(convertBase64ToExternalImage(token.original.value), optimizedSvg);
  }

  const optimizedAssetName = `${token.original.value}-optimized`;
  const optimizedAssetPath = path.join(__dirname, '../../assets/logo', optimizedAssetName);

  fs.writeFileSync(`${optimizedAssetPath}.svg`, optimizedSvg);

  return optimizedAssetName;
};

export const registerOptimizeSvgTransform = () => ({
  matcher: isAsset,
  name: 'asset/svg-optimized',
  transformer,
  type: 'value',
});

export default registerOptimizeSvgTransform;
