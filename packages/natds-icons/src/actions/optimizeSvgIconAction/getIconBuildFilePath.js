const getIconBuildDir = require('./getIconBuildDir');

const getIconBuildFilePath = ({ buildPath, iconFilename }) => {
  const iconBuildDir = getIconBuildDir(buildPath);

  if (typeof iconFilename !== 'string') {
    throw new Error('iconFilename parameter must be a string. Please check the parameter name.');
  }

  return `${iconBuildDir}/${iconFilename}.svg`;
};

module.exports = getIconBuildFilePath;
