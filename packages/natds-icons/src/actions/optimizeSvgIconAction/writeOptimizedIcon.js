const { writeFile } = require('fs');
const getIconBuildFilePath = require('./getIconBuildFilePath');

const writeOptimizedIcon = ({ buildPath, data, iconFilename }) => {
  const path = getIconBuildFilePath({ buildPath, iconFilename });

  if (typeof path === 'undefined') {
    throw new Error(`Can not optimize ${iconFilename}. Could not retrieve icon build file path.`);
  }

  writeFile(path, data, (error) => {
    if (error) {
      console.log(`
Can not write ${iconFilename}.svg at build directory.
Please check if path exists:
`, path);
      throw error;
    }
  });
};

module.exports = writeOptimizedIcon;
