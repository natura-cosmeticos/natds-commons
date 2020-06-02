import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const registerProtocolColorPaletteFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/colorPaletteProtocol.hbs');

  const templateDataBuilder = dictionary => ({
    color: dictionary.properties.color,
  });

  return formatBuilder('ios-swift/protocol-colors-palette.swift', templatePath, templateDataBuilder);
};

export default registerProtocolColorPaletteFormat;
