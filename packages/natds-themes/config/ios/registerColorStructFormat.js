import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const registerColorStructFormat = () => {
  const html = fs.readFileSync(path.resolve(__dirname, './templates/colorPaletteStruct.hbs')).toString();
  const htmlTemplate = Handlebars.compile(html);

  const formatter = (dictionary, platform) => htmlTemplate({
    color: dictionary.properties.color,
    structName: platform.files[0].destination.replace('.swift', ''),
  });

  return {
    formatter,
    name: 'ios-swift/struct-colors.swift',
  };
};

export default registerColorStructFormat;
