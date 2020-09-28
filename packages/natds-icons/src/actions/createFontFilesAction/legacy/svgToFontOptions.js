const path = require('path');
const { version } = require('../../../package.json');

const svgToFontOptions = () => {
  const {
    buildPath, fontName, fontHeight, metadata, normalize, source,
  } = config;

  return {
    css: true,
    dist: path.resolve(buildPath),
    emptyDist: false,
    fontName,
    outSVGPath: false,
    outSVGReact: true,
    src: path.resolve(source),
    svg2ttf: {
      copyright: metadata,
    },
    svgicons2svgfont: {
      fontHeight,
      fontId: fontName,
      fontName,
      normalize,
    },
    website: {
      corners: {
        url: 'https://github.com/natura-cosmeticos/natds-commons',
      },
      logo: 'Natura & Co.',
      title: 'Icons for Natura & Co. Design System',
      version,
    },
  };
};

module.exports = svgToFontOptions;
