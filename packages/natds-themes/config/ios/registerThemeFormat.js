import path from 'path';
import { formatBuilder } from '../shared/formatBuilder';

const splitTokensAndComponents = ({
  size, spacing, typography, borderRadius, color,
  ...components
}) => ({
  components,
  tokens: {
    borderRadius,
    color,
    size,
    spacing,
    typography,
  },
});

const registerThemeFormat = () => {
  const templatePath = path.resolve(__dirname, './templates/theme.hbs');

  const templateDataBuilder = (dictionary) => ({
    ...(splitTokensAndComponents(dictionary.properties)),
    properties: dictionary.properties,
  });

  return formatBuilder('ios-swift/theme.swift', templatePath, templateDataBuilder);
};

export default registerThemeFormat;
