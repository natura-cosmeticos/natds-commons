const glyphTransformFn = ({ dictionary, metadata }) => {
  const { icon: iconAssets } = dictionary.properties.asset;
  const { name } = metadata;
  const { value } = iconAssets[name];
  const updatedMetadata = metadata;

  updatedMetadata.unicode = [value];

  return updatedMetadata;
};

module.exports = glyphTransformFn;
