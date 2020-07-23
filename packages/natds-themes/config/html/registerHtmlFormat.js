import Handlebars from 'handlebars';
import path from 'path';
import fs from 'fs';
import { formatBuilder } from '../shared/formatBuilder';
import { splitTokensAndComponents } from '../shared/helpers';

const templateDataBuilder = ({ properties }) => {
  const { tokens, components } = splitTokensAndComponents(properties);
  const { button, ...typographyElements } = components;

  return ({
    components: {
      button,
    },
    tokens,
    typographyElements,
  });
};

const registerHtmlFormat = () => {
  const navigationTemplate = fs.readFileSync(path.resolve(__dirname, './templates/navigation.hbs')).toString();

  Handlebars.registerPartial('navigation', navigationTemplate);

  const templatePath = path.resolve(__dirname, './templates/tokens.hbs');

  return formatBuilder('html/colors', templatePath, templateDataBuilder);
};

export default registerHtmlFormat;
