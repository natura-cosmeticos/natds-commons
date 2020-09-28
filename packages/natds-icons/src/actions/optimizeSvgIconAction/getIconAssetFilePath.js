const path = require('path');

const getIconAssetFilePath = ({ iconAssetsDir, iconFilename }) => path.resolve(`${iconAssetsDir}${iconFilename}.svg`);

module.exports = getIconAssetFilePath;
