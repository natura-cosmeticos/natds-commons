import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const registerAttributesFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/attributes.hbs');

  return formatBuilder('android/attributes', templatePath, ({ properties }) => ({ properties }));
};

export default registerAttributesFormat;
