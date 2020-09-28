const path = require('path');

const getFontFilePaths = ({ buildPath, fontName }) => ({
  svg: path.resolve(buildPath, `${fontName}.svg`),
  ttf: path.resolve(buildPath, `${fontName}.ttf`),
  woff2: path.resolve(buildPath, `${fontName}.woff2`),
});

module.exports = getFontFilePaths;
