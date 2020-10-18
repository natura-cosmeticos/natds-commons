import webfont from 'webfont';
import { getMetadataProvider } from './metadataBuilder';

export const buildInitialFontData = (data) => {
  if (!data?.previousIconCodes) return Promise.reject(new Error('previousIconCodes not found'));

  if (!data?.globalConfig?.cleanedSvgOutput) return Promise.reject(new Error('cleanedSvgOutput not found'));

  const metadataProvider = getMetadataProvider(data);

  const svgFilesPath = `${data.globalConfig.cleanedSvgOutput}**/*.svg`;

  const config = {
    files: svgFilesPath,
    fontHeight: 600,
    fontName: data?.globalConfig?.fontName || 'natds-icons',
    metadataProvider,
    normalize: true,
    template: 'css',
    templateFontPath: './fonts',
  };

  return webfont(config).then((response) => ({ ...data, ...response}));
};

export default buildInitialFontData;
