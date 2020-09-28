const fs = require('fs');
const getFontFilePaths = require('./getFontFilePaths');
const getFontStream = require('./getFontStream');
const getIconsFromDictionary = require('../../getIconsFromDictionary');
const writeGlyph = require('./writeGlyph');

const writeSvgFontFile = ({
  config, dictionary, onError, onFinish,
}) => {
  const { buildPath, fontName } = config;
  const { svg: svgFilePath } = getFontFilePaths({ buildPath, fontName });
  const fontStream = getFontStream(config);
  const icons = getIconsFromDictionary(dictionary);

  fontStream.pipe(fs.createWriteStream(svgFilePath)).on('finish', () => {
    // eslint-disable-next-line no-console
    console.info(`SUCCESS\t${fontName} SVG Font File written successfully to`, svgFilePath);
    onFinish();
  }).on('error', (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.info('Error', error);
      throw error;
    }
    onError();
  });

  icons.forEach((icon) => writeGlyph({ fontStream, icon }));

  fontStream.end();
};

module.exports = writeSvgFontFile;
