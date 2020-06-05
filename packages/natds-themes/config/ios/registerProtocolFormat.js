import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const registerProtocolColorPaletteFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/protocol.hbs');

  const templateDataBuilder = (
    dictionary,
    platform,
    { protocolName, protocolType, propertyName },
  ) => ({
    properties: dictionary.properties[propertyName],
    protocolName,
    protocolType,
  });

  return formatBuilder('ios-swift/protocol.swift', templatePath, templateDataBuilder);
};

export default registerProtocolColorPaletteFormat;
