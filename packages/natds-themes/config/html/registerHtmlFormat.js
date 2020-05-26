import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import variables from '../nodeVariables.cjs';

const { __dirname } = variables;

const registerHtmlFormat = () => {
  const navigationTemplate = fs.readFileSync(path.resolve(__dirname, './html/templates/navigation.hbs')).toString();

  Handlebars.registerPartial('navigation', navigationTemplate);

  const html = fs.readFileSync(path.resolve(__dirname, './html/templates/colors.hbs')).toString();
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
