const fs = require('fs');
const path = require('path');

const writeFontFiles = ({ config, result }) => {
  const { buildPath } = config;
  const { config: { fontName, formats, templateFontPath } } = result;

  formats.forEach((format) => {
    const fontFilePath = path.resolve(buildPath, templateFontPath, `${fontName}.${format}`);
    const data = result[format];

    fs.writeFile(fontFilePath, data, (error) => {
      if (error) {
        throw error;
      }
      // eslint-disable-next-line no-console
      console.info(`${format} font file written successfully to ${fontFilePath}`);
    });
  });
};

module.exports = writeFontFiles;
