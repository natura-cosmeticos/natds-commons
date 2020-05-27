import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const registerProtocolColorPalletFormat = () => {
  const html = fs.readFileSync(path.resolve(__dirname, './templates/colorPalette.hbs')).toString();
  const htmlTemplate = Handlebars.compile(html);

  const formatter = dictionary => htmlTemplate({
    color: dictionary.properties.color,
  });

  return {
    formatter,
    name: 'ios-swift/protocol-colors-palette.swift',
  };
};

export default registerProtocolColorPalletFormat;
