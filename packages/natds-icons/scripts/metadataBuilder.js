const path = require('path');
const previousCodes = require('../src/natds-icons.unicode.json');

require('string.fromcodepoint');
require('string.prototype.codepointat');

const findNextCodepoint = (startCode, usedCodes) => usedCodes.includes(startCode)
  ? findNextCodepoint(++startCode, usedCodes)
  : startCode

const getUsedUnicodesFromFile = () => Object
  .values(previousCodes)
  .flat(2)
  .map(item => item[0].codePointAt(0))

const buildInitialMetadata = (file) => ({
  path: file,
  name: path.basename(file).replace('.svg', ''),
  unicode: [],
  renamed: false,
});

const startUnicode = 0xea01;

const getMetadataService = () => {
  const usedUnicodes = getUsedUnicodesFromFile();

  return (file, cb) => {
    const metadata = buildInitialMetadata(file);

    if (previousCodes[metadata.name]) {
      metadata.unicode = previousCodes[metadata.name];
    } else {
      const nextCode = findNextCodepoint(startUnicode, usedUnicodes)
      metadata.unicode[0] = String.fromCodePoint(nextCode)
      usedUnicodes.push(nextCode);
    }

    cb(null, metadata);
  };
}

module.exports = getMetadataService;
