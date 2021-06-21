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
  const assetName = `${token.original.value}.svg`;
  const assetPath = path.join(__dirname, '../../assets/logo', assetName);

  const svgInline = fs.readFileSync(assetPath, 'utf-8');
  const optimizedSvg = optimize(svgInline, { plugins });

  return optimizedSvg.data || svgInline;
};

export const registerAssetInlineTransform = () => ({
  matcher: isAsset,
  name: 'asset/svg-inline',
  transformer,
  type: 'value',
});

export default registerAssetInlineTransform;
