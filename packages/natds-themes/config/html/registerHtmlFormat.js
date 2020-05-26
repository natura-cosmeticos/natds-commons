import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const registerHtmlFormat = () => {
  const navigationTemplate = fs.readFileSync(path.resolve(__dirname, './templates/navigation.hbs')).toString();

  Handlebars.registerPartial('navigation', navigationTemplate);

  const html = fs.readFileSync(path.resolve(__dirname, './templates/colors.hbs')).toString();
  const htmlTemplate = Handlebars.compile(html);

  const formatter = dictionary => htmlTemplate({
    color: dictionary.properties.color,
  });

  return {
    formatter,
    name: 'html/colors',
  };
};

export default registerHtmlFormat;
