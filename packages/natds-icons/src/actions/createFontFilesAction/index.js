/* eslint-disable import/no-extraneous-dependencies,no-console */
const writeWoff2File = require('./writeWoff2File');
const writeSvgFontFile = require('./writeSvgFontFile');
const writeTtfFile = require('./writeTtfFile');

const createFontFilesAction = {
  do(dictionary, config) {
    const onFinishTtfWriting = () => {
      writeWoff2File(config);
    };

    const onFinish = () => {
      writeTtfFile({ config, onFinish: onFinishTtfWriting });
    };

    writeSvgFontFile({
      config, dictionary, onFinish,
    });
  },
  name: 'create_font_files',
};

module.exports = createFontFilesAction;
