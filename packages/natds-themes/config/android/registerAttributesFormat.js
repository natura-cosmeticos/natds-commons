import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const registerAttributesFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/attributes.hbs');

  const templateDataBuilder = dictionary => ({
    color: dictionary.properties.color,
  });

  return formatBuilder('android/attributes', templatePath, templateDataBuilder);
};

export default registerAttributesFormat;
