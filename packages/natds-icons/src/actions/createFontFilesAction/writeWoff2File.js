const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const ttf2woff2 = require('ttf2woff2');
const getFontFilePaths = require('./getFontFilePaths');

const writeWoff2File = (config) => {
  const { buildPath, fontName } = config;
  const { ttf: ttfFilePath, woff2: woff2FilePath } = getFontFilePaths({ buildPath, fontName });

  const ttfData = fs.readFileSync(ttfFilePath);

  fs.writeFileSync(woff2FilePath, ttf2woff2(ttfData));

  // eslint-disable-next-line no-console
  console.info(`SUCCESS\t${fontName} WOFF2 Font File written successfully to`, woff2FilePath);
};

module.exports = writeWoff2File;
