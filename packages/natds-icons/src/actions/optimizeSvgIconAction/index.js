const fs = require('fs');
const getIconAssetFilePath = require('./getIconAssetFilePath');
const getIconFilenames = require('./getIconFilenames');
const optimizeSvg = require('./optimizeSvg');

/**
 * @todo Implement undo function
 * @todo Refactor config using https://amzn.github.io/style-dictionary/#/config?id=configjson
 * @type {{name: string, do(*, *): void}}
 */
const optimizeSvgIconAction = {
  do(dictionary, config) {
    const { buildPath, source } = config;
    const iconFilenames = getIconFilenames({
      dictionary,
      iconAssetsDir: source,
      method: 'dictionary',
    });

    iconFilenames.forEach((iconFilename) => {
      if (typeof iconFilename !== 'string') {
        // eslint-disable-next-line no-console
        console.warn(`${iconFilename} is not a valid icon file name`);
      }

      const path = getIconAssetFilePath({ iconAssetsDir: source, iconFilename });

      fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
          throw error;
        }

        return optimizeSvg({ buildPath, iconFilename, svgString: data });
      });
    });
  },
  name: 'optimize_svg_icon',
};

module.exports = optimizeSvgIconAction;
