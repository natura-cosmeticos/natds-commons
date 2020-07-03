import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const templateDataBuilder = (dictionary, _platform, {
  interfaceName,
  structName,
  type,
  propertyName,
}) => ({
  interfaceName,
  properties: dictionary.properties[propertyName],
  structName,
  type,
});

const registerColorStructFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/struct.hbs');

  return formatBuilder('ios-swift/struct.swift', templatePath, templateDataBuilder);
};

export default registerColorStructFormat;
