/* eslint-disable no-console */
const writeFontFiles = require('./writeFontFiles');
const writeTemplateFile = require('./writeTemplateFile');

const onSuccess = ({ config, result }) => {
  writeTemplateFile({ config, result });
  writeFontFiles({ config, result });
  console.info('Font files generated successfully');
};

module.exports = onSuccess;
