// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');
const getIconFilenamesByDictionary = require('../../getIconFilenamesFromDictionary');

const getIconFilenames = ({ dictionary, iconAssetsDir, method }) => {
  if (typeof method === 'undefined' || method === 'dictionary') {
    return getIconFilenamesByDictionary(dictionary);
  }

  let filenames = [];

  glob(`${iconAssetsDir}/*.svg`, (error, result) => {
    if (error) {
      throw error;
    }
    filenames = result;
  });

  return filenames;
};

module.exports = getIconFilenames;
