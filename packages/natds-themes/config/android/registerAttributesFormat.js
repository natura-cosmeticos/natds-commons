import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';
import { flattenProps } from '../shared/helpers';

const registerAttributesFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/attributes.hbs');

  return formatBuilder('android/attributes', templatePath, ({ properties }) => ({ properties: flattenProps(properties) }));
};

export default registerAttributesFormat;
