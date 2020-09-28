const glyphTransformFn = require('./glyphTransformFn');

const getWebfontConfig = ({ config, dictionary }) => {
  const {
    fontName, fontHeight, normalize, source,
  } = config;

  return {
    files: source,
    fontHeight,
    fontName,
    glyphTransformFn: (metadata) => glyphTransformFn({ dictionary, metadata }),
    normalize,
    sort: true,
    template: 'css',
    templateFontPath: './fonts',
  };
};

module.exports = getWebfontConfig;
