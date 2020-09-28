const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const toTTF = require('svg2ttf');
const { homepage } = require('../../../package.json');
const getFontFilePaths = require('./getFontFilePaths');

const writeTtfFile = ({ config, onFinish }) => {
  const {
    buildPath, copyright, description, fontName,
  } = config;
  const { svg: svgFilePath, ttf: ttfFilePath } = getFontFilePaths({ buildPath, fontName });

  const ttf = toTTF(fs.readFileSync(svgFilePath, 'utf8'), {
    copyright, description, url: homepage,
  });

  fs.writeFile(ttfFilePath, Buffer.from(ttf.buffer), (error) => {
    // eslint-disable-next-line no-console
    console.info(`SUCCESS\t${fontName} TTF file written successfully to`, ttfFilePath);
    onFinish(error);
  });
};

module.exports = writeTtfFile;
