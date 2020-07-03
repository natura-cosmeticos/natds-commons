import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const registerAttributesFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/attributes.hbs');

  const templateDataBuilder = dictionary => ({
    color: dictionary.properties.color,
    size: dictionary.properties.size,
    spacing: dictionary.properties.spacing,
  });

  return formatBuilder('android/attributes', templatePath, templateDataBuilder);
};

export default registerAttributesFormat;
