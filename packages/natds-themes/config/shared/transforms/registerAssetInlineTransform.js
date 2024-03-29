import { isLogoAssetFileLanguage, readAsset } from '../helpers'

const transformer = (token) => {
  const assetName = `${token.value}.svg`
  const svgInline = readAsset(assetName)

  return svgInline
}

export const registerAssetInlineTransform = () => ({
  matcher: isLogoAssetFileLanguage,
  name: 'asset/svg-inline',
  transformer,
  type: 'value'
})

export default registerAssetInlineTransform
