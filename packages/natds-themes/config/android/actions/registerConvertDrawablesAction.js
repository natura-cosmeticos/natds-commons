/* eslint-disable max-len */
import fs from 'fs'
import webp from 'webp-converter'
import svg2vectordrawable from 'svg2vectordrawable/lib/svg-file-to-vectordrawable-file'
import { differenceWith } from 'ramda'
import { checkDir, isLogoAssetFile, isProp } from '../../shared/helpers'
import { assetsSourcePath, pngSizes } from '../../shared/actions/registerCopyAssetsAction'

export const buildDrawablesPaths = (prop, outputPath) => {
  const fileName = prop.original.value
  const paths = [
    {
      input: `${assetsSourcePath}/${fileName}.svg`,
      output: `${outputPath}/drawables/${fileName.replace(/-/g, '_')}.xml`,
      outputDir: `${outputPath}/drawables`
    }
  ]

  return paths
}

export const buildImagePaths = (prop, outputPath) => {
  const fileName = prop.original.value
  const paths = [
    {
      input: `${assetsSourcePath}/${fileName}.png`,
      output: `${outputPath}/${fileName.replace(/-/g, '_')}.webp`,
      outputDir: outputPath
    }
  ]

  pngSizes.forEach((imageSize) => {
    paths.push({
      input: `${assetsSourcePath}/${imageSize}/${fileName}.png`,
      output: `${outputPath}/${imageSize}/${fileName.replace(/-/g, '_')}.webp`,
      outputDir: `${outputPath}/${imageSize}`
    })
  })

  return paths
}

const buildImages = ({ input, output, outputDir }) => {
  checkDir(outputDir)
  webp.cwebp(input, output, '-q 80')
}

const buildDrawables = ({ input, output, outputDir }) => {
  checkDir(outputDir)
  svg2vectordrawable(input, output)
}

const handleDrawablesAndImage = (drawableHandle, imageHandle) => (dictionary, { buildPath }) => {
  const assets = dictionary.allTokens.filter(isLogoAssetFile)
  const images = assets.filter(isProp('neutral'))
  const drawables = assets.filter(isProp('custom'))

  const imagesDiff = differenceWith((image, drawable) => image.value === drawable.value, images, drawables)

  drawables.forEach((drawable) => {
    const paths = buildDrawablesPaths(drawable, `${buildPath}assets`)

    paths.forEach(drawableHandle)
  })

  imagesDiff.forEach((image) => {
    const paths = buildImagePaths(image, `${buildPath}assets`)

    paths.forEach(imageHandle)
  })
}

export const convertDrawables = handleDrawablesAndImage(buildDrawables, buildImages)

export const unlinkSync = ({ output }) => fs.unlinkSync(output)

export const removeDrawables = handleDrawablesAndImage(unlinkSync, unlinkSync)

export const registerConvertDrawablesAction = () => (
  {
    do: convertDrawables,
    name: 'convert_drawables',
    undo: removeDrawables
  }
)

export default registerConvertDrawablesAction
