import { isAsset } from './helpers';

const extensions = {
  android: ['svg', 'png'],
  css: ['svg'],
  html: ['svg'],
  ios: ['pdf'],
  'react-native': ['svg'],
  web: ['svg'],
};

const transformer = (prop, config) => {
  const [, platform] = config.buildPath.split('/');

  return {
    assetOptions: {
      extensions: extensions[platform],
    },
  };
};

export const registerAssetExtensionTransform = () => ({
  matcher: isAsset,
  name: 'asset/extension',
  transformer,
  transitive: true,
  type: 'attribute',
});

export default registerAssetExtensionTransform;
