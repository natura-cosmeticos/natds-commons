import { isAssetFile, isProp } from '../helpers'

const extensions = {
  android: [],
  css: ['svg'],
  html: ['svg'],
  ios: ['pdf'],
  'react-native': ['svg'],
  web: ['svg']
}

const fontExtensions = {
  android: ['ttf'],
  css: ['ttf', 'eot', 'woff', 'woff2'],
  html: ['ttf', 'eot', 'woff', 'woff2'],
  ios: ['ttf'],
  'react-native': ['ttf'],
  web: ['ttf', 'eot', 'woff', 'woff2']
}

const transformer = (prop, config) => {
  const [, platform] = config.buildPath.split('/')

  if (isProp('brand')(prop)) {
    return {
      assetOptions: {
        extensions: extensions[platform]
      }
    }
  }

  return {
    assetOptions: {
      extensions: fontExtensions[platform]
    }
  }
}

export const registerAssetExtensionTransform = () => ({
  matcher: isAssetFile,
  name: 'asset/extension',
  transformer,
  transitive: true,
  type: 'attribute'
})

export default registerAssetExtensionTransform
