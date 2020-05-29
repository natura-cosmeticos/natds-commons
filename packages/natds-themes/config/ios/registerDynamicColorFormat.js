import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const registerDynamicColorFormat = () => {
  const html = fs.readFileSync(path.resolve(__dirname, './templates/dynamicColorsClass.hbs')).toString();
  const htmlTemplate = Handlebars.compile(html);

  const formatter = dictionary => htmlTemplate({
    color: dictionary.properties.color,
  });

  return {
    formatter,
    name: 'ios-swift/dynamic-colors.swift',
  };
};

export default registerDynamicColorFormat;
