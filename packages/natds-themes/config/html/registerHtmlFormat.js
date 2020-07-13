import Handlebars from 'handlebars';
import path from 'path';
import fs from 'fs';
import { formatBuilder } from '../shared/formatBuilder';

const registerHtmlFormat = () => {
  const navigationTemplate = fs.readFileSync(path.resolve(__dirname, './templates/navigation.hbs')).toString();

  Handlebars.registerPartial('navigation', navigationTemplate);

  const templatePath = path.resolve(__dirname, './templates/tokens.hbs');

  const templateDataBuilder = (dictionary) => ({
    borderRadius: dictionary.properties.borderRadius,
    color: dictionary.properties.color,
    size: dictionary.properties.size,
    spacing: dictionary.properties.spacing,
    opacity: dictionary.properties.opacity,
    typography: dictionary.properties.typography,
    typographyElements: {
      heading1: dictionary.properties.heading1,
      heading2: dictionary.properties.heading2,
      heading3: dictionary.properties.heading3,
      heading4: dictionary.properties.heading4,
      heading5: dictionary.properties.heading5,
      heading6: dictionary.properties.heading6,
      subtitle1: dictionary.properties.subtitle1,
      subtitle2: dictionary.properties.subtitle2,
      body1: dictionary.properties.body1,
      body2: dictionary.properties.body2,
      caption: dictionary.properties.caption,
      overline: dictionary.properties.overline,
    }
  });

  return formatBuilder('html/colors', templatePath, templateDataBuilder);
};

export default registerHtmlFormat;
