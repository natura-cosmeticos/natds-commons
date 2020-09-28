const getIconFilenamesByDictionary = (dictionary) => {
  if (typeof dictionary === 'undefined') {
    throw new Error('Please provide a valid dictionary object, or use `glob` as method');
  }

  const { icon } = dictionary.properties.asset;

  return Object.keys(icon);
};

module.exports = getIconFilenamesByDictionary;
