import { optimize } from 'svgo';

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

export const svgOptimizer = (svg) => optimize(svg, { plugins }).data;

export default { svgOptimizer };
