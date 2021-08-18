import Handlebars from 'handlebars';
import path from 'path';
import fs from 'fs';
import {
  flattenProps, isProp, splitTokensAndComponents, formatBuilder,
} from '../../shared/helpers';

const templateDataBuilder = ({ properties }, config) => {
  const { tokens, components } = splitTokensAndComponents(properties);
  const { button, ...typographyElements } = components;
  const { asset, ...otherTokens } = tokens;
  const { brand } = asset;

  return ({
    brand: flattenProps(brand),
    brandName: config.brand,
    components: {
      button,
    },
    tokens: otherTokens,
    typographyElements,
  });
};

export const registerHtmlFormat = () => {
  const navigationTemplate = fs.readFileSync(path.resolve(__dirname, './templates/navigation.hbs')).toString();

  Handlebars.registerPartial('navigation', navigationTemplate);

  const templatePath = path.resolve(__dirname, './templates/tokens.hbs');

  return formatBuilder('html/colors', templatePath, templateDataBuilder);
};

export const registerSpectrumHtmlFormat = () => {
  const navigationTemplate = fs.readFileSync(path.resolve(__dirname, './templates/navigation.hbs')).toString();

  Handlebars.registerPartial('navigation', navigationTemplate);
  const templatePath = path.resolve(__dirname, './templates/spectrum.hbs');

  return formatBuilder('html/spectrum', templatePath, ({ properties }) => {
    const spectrum = flattenProps(properties);

    return {
      colors: spectrum.filter((prop) => !isProp('gradient')(prop)),
    };
  });
};

export default registerHtmlFormat;
