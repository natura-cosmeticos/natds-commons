/* eslint-disable max-statements */
import fs from 'fs';
import { optimize } from 'svgo';
import path from 'path';
import { isAsset } from './helpers';

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

const transformer = (token) => {
  const assetRemoteBaseUrl = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets/';
  const assetName = `${token.original.value}.svg`;
  const assetPath = path.join(__dirname, '../../assets/logo', assetName);

  const svgInline = fs.readFileSync(assetPath);
  let optimizedSvg = optimize(svgInline, { plugins }).data;
  
  
  const regex = new RegExp(/data:image\/png;base64,([^"']+)/gm);
  
  console.log(regex.exec(svg))
  const matches = [];

  let match;


  do {
    match = regex.exec(optimizedSvg);
    if (match && match.groups) {
      matches.push(match.groups);
    }
  } while (match);


  if (matches.length) {
    matches.forEach((item, index) => {
      const imageName = `${assetName}-image-${index}.png`;

      fs.writeFileSync(path.join(__dirname, '../../assets/logo', imageName), item.imageData, 'base64');
      optimizedSvg = optimizedSvg.replace(item.imageData, `${assetRemoteBaseUrl}${imageName}`);
    });
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
