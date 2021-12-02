import Handlebars from 'handlebars';
import path from 'path';
import fs from 'fs';
import {
  flattenProps, isProp, splitTokensAndComponents, formatBuilder,
} from '../../shared/helpers';

const templateDataBuilder = ({ properties }, config) => {
  const { tokens, components } = splitTokensAndComponents(properties);
  const {
    button, badge, shortcut, ...typographyElements
  } = components;
  const { asset, ...otherTokens } = tokens;
  const { brand } = asset;

  const { display, headline, body } = tokens.typography;

  const typography = [
    {
      fontFamily: display.fontFamily.value,
      fontWeight: display.fontWeight.value,
      name: display.fontFamily.name,
    },
    {
      fontFamily: headline.fontFamily.value,
      fontWeight: headline.fontWeight.value,
      name: headline.fontFamily.name,
    },
    {
      fontFamily: body.regular.fontFamily.value,
      fontWeight: body.regular.fontWeight.value,
      name: body.regular.fontFamily.name,
    },
    {
      fontFamily: body.bold.fontFamily.value,
      fontWeight: body.bold.fontWeight.value,
      name: body.bold.fontFamily.name,
    },
  ];

  return ({
    brand: flattenProps(brand),
    brandName: config.brand,
    components: {
      badge,
      button,
      shortcut,
    },
    tokens: otherTokens,
    typography,
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
