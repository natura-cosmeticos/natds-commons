const fs = require('fs');
const path = require('path');

const writeTemplateFile = ({ config, result }) => {
  const { buildPath } = config;
  const { config: { fontName, template: templateFileExtension }, template: templateData } = result;

  const sourcePath = path.resolve(buildPath);
  const templateFilePath = `${sourcePath}/${fontName}.${templateFileExtension}`;

  fs.writeFile(templateFilePath, templateData, () => {
    // eslint-disable-next-line no-console
    console.info(`Template file written successfully to ${templateFilePath}`);
  });
};

module.exports = writeTemplateFile;
