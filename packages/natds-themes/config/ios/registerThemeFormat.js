import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';
import { flattenProps, splitTokensAndComponents } from '../shared/helpers';

const registerThemeFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/theme.hbs');

  const templateDataBuilder = ({ properties }) => {
    const { tokens, components } = splitTokensAndComponents(properties);

    return {
      components: flattenProps(components),
      tokens: flattenProps(tokens),
    };
  };

  return formatBuilder('ios-swift/theme.swift', templatePath, templateDataBuilder);
};

export default registerThemeFormat;
