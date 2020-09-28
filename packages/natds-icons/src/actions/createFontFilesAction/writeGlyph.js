const fs = require('fs');
const path = require('path');

const writeGlyph = ({ fontStream, icon }) => {
  const { name, unicode, value } = icon;

  if (typeof value !== 'string') {
    throw new Error(`
Found invalid value for glyph ${name}. It must be a path in a string format.
Please check assets/icons.json properties file.
`);
  }

  console.info(`Writing glyph from ${value}`);
  const iconFilePath = path.resolve(value);
  const glyph = fs.createReadStream(iconFilePath);

  glyph.metadata = {
    name,
    unicode: typeof unicode === 'string' ? [unicode] : unicode,
  };
  fontStream.write(glyph);
};

module.exports = writeGlyph;
