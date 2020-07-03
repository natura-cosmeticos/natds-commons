import Handlebars from 'handlebars';
import path from 'path';
import fs from 'fs';
import { formatBuilder } from '../shared/formatBuilder';

const registerHtmlFormat = () => {
  const navigationTemplate = fs.readFileSync(path.resolve(__dirname, './templates/navigation.hbs')).toString();

  Handlebars.registerPartial('navigation', navigationTemplate);

  const templatePath = path.resolve(__dirname, './templates/tokens.hbs');

  const templateDataBuilder = (dictionary) => ({
    color: dictionary.properties.color,
    size: dictionary.properties.size,
    spacing: dictionary.properties.spacing,
  });

  return formatBuilder('html/colors', templatePath, templateDataBuilder);
};

export default registerHtmlFormat;
