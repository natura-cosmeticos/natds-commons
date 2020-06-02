import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const registerProtocolColorPalletFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/colorPaletteProtocol.hbs');

  const templateDataBuilder = dictionary => ({
    color: dictionary.properties.color,
  });

  return formatBuilder('ios-swift/protocol-colors-palette.swift', templatePath, templateDataBuilder);
};

export default registerProtocolColorPalletFormat;
