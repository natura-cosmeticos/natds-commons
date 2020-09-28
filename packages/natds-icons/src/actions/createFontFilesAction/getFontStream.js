// eslint-disable-next-line import/no-extraneous-dependencies
const SVGIcons2SVGFontStream = require('svgicons2svgfont');

const getFontStream = (config) => {
  const {
    fontHeight, fontId, fontName, fontStyle, fontWeight, normalize,
  } = config;

  const fontStream = new SVGIcons2SVGFontStream({
    fontHeight,
    fontId,
    fontName,
    fontStyle,
    fontWeight,
    normalize,
  });

  return fontStream;
};

module.exports = getFontStream;
