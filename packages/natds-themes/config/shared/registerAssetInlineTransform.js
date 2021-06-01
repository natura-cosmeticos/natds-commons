import fs from 'fs';
import path from 'path';
import { isAsset } from './helpers';

const transformer = (token) => {
  const assetName = `${token.original.value}.svg`;
  const assetPath = path.join(__dirname, '../../assets/logo', assetName);

  const svgInline = fs.readFileSync(assetPath, 'utf-8');

  return svgInline;
};

export const registerAssetInlineTransform = () => ({
  matcher: isAsset,
  name: 'asset/svg-inline',
  transformer,
  type: 'value',
});

export default registerAssetInlineTransform;
