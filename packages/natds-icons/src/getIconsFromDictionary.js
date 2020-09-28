const getIconsFromDictionary = (dictionary) => {
  const { icon } = dictionary.properties.asset;

  return Object.values(icon);
};

module.exports = getIconsFromDictionary;
