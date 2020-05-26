import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const registerHtmlFormat = () => {
  const html = fs.readFileSync(path.resolve(__dirname, './templates/attributes.hbs')).toString();
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
