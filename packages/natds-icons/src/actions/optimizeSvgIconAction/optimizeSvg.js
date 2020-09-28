const svgOptimizer = require('./svgOptimizer');
const writeOptimizedIcon = require('./writeOptimizedIcon');

const optimizeSvg = ({
  buildPath, iconFilename, svgString,
}) => {
  if (typeof iconFilename !== 'string') {
    throw new Error('iconFilename must be a string. Please check if iconFilename parameter is set.');
  }

  if (typeof svgString !== 'string') {
    console.warn(`Found a non-valid SVG string for ${iconFilename}`);
  }

  svgOptimizer.optimize(svgString, { iconFilename }).then(({ data }) => {
    writeOptimizedIcon({ buildPath, data, iconFilename });
  });
};

module.exports = optimizeSvg;
