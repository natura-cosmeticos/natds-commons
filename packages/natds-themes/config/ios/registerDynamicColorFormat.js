import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const registerDynamicColorFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/dynamicColorsClass.hbs');

  const templateDataBuilder = dictionary => ({
    color: dictionary.properties.color,
  });

  return formatBuilder('ios-swift/dynamic-colors.swift', templatePath, templateDataBuilder);
};

export default registerDynamicColorFormat;
