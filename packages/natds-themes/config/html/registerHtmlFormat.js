import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const registerHtmlFormat = () => {
  const navigationTemplate = fs.readFileSync(path.resolve('config/html/navigation.hbs')).toString();

  Handlebars.registerPartial('navigation', navigationTemplate);

  const html = fs.readFileSync(path.resolve('config/html/colors.hbs')).toString();
  const htmlTemplate = Handlebars.compile(html);

  return {
    formatter: dictionary => {
      return htmlTemplate({
        color: dictionary.properties.color,
      });
    },
    name: 'html/colors',
  };
};

export default registerHtmlFormat;
