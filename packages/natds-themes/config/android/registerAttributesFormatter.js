import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import variables from '../nodeVariables.cjs';

const { __dirname } = variables;

const registerHtmlFormat = () => {
  const html = fs.readFileSync(path.resolve(__dirname, './android/templates/attributes.hbs')).toString();
  const htmlTemplate = Handlebars.compile(html);

  const formatter = dictionary => htmlTemplate({
    color: dictionary.properties.color,
  });

  return {
    formatter,
    name: 'android/attributes',
  };
};

export default registerHtmlFormat;
