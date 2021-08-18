import { isLogoAssetFile, readAsset } from '../helpers';

const transformer = (token) => {
  const assetName = `${token.value}.svg`;
  const svgInline = readAsset(assetName);

  return svgInline;
};

export const registerAssetInlineTransform = () => ({
  matcher: isLogoAssetFile,
  name: 'asset/svg-inline',
  transformer,
  type: 'value',
});

export default registerAssetInlineTransform;
