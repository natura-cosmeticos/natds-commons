import fs from 'fs';
import path from 'path';
import { optimize } from 'svgo';
import {
  isLogoAssetFile, readAsset, execPattern, convertBase64ToExternalImage,
} from '../helpers';

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
  'removeXMLProcInst',
  'sortDefsChildren',
];

const transformer = (token) => {
  const assetName = `${token.original.value}.svg`;
  const svgInline = readAsset(assetName);

  let optimizedSvg = optimize(svgInline, { plugins }).data;

  const matches = execPattern('data:image/png;base64,(?<imageData>[^"\']+)', optimizedSvg);

  if (matches.length) {
    optimizedSvg = matches.reduce(convertBase64ToExternalImage(token.original.value), optimizedSvg);
  }

  const optimizedAssetName = `${token.original.value}-optimized`;
  const optimizedAssetPath = path.join(__dirname, '../../../assets', optimizedAssetName);

  fs.writeFileSync(`${optimizedAssetPath}.svg`, optimizedSvg);

  return optimizedAssetName;
};

export const registerOptimizeSvgTransform = () => ({
  matcher: isLogoAssetFile,
  name: 'asset/svg-optimized',
  transformer,
  type: 'value',
});

export default registerOptimizeSvgTransform;
