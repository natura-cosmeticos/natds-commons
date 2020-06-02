import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const registerColorStructFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/colorPaletteStruct.hbs');

  const templateDataBuilder = (dictionary, platform) => ({
    color: dictionary.properties.color,
    structName: platform.files[0].destination.replace('.swift', ''),
  });

  return formatBuilder('ios-swift/struct-colors.swift', templatePath, templateDataBuilder);
};

export default registerColorStructFormat;
