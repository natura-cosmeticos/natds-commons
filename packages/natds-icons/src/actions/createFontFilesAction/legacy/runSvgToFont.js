// eslint-disable-next-line import/no-extraneous-dependencies
const SvgToFont = require('svgtofont');
const svgToFontOptions = require('./svgToFontOptions');

const runSvgToFont = () => {
  const options = svgToFontOptions();

  SvgToFont(options).then(() => {
    // eslint-disable-next-line no-console
    console.info('SVG to font');
  });
};

module.exports = runSvgToFont;
