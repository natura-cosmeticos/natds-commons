import fs from 'fs';
import path from 'path';
import {
  has,
  pipe,
  none,
  not,
  flatten,
  when,
  ifElse,
  is,
  identity,
  values,
  map,
  until,
  flip,
  uncurryN,
  prop,
  includes,
  any,
  both,
} from 'ramda';

export const negate = (func) => pipe(func, not);
export const isProp = (propName) => pipe(prop('path'), includes(propName));
export const flipIsProp = flip(uncurryN(2, isProp));
export const isOneOfProps = (property) => (dic) => any(flipIsProp(dic))(property);
export const isPrivateProp = isOneOfProps(['platform', 'spectrum']);
export const isSpectrumProp = both(isProp('spectrum'), negate(isProp('gradient')));
export const isAsset = isProp('asset');
export const isAssetFile = both(isAsset, isProp('file'));
export const isLogoAssetFile = both(isAssetFile, isProp('brand'));
export const isFontAssetFile = both(isAssetFile, isProp('font'));
export const isCustomAsset = both(isAssetFile, isProp('custom'));

export const flattenProps = (properties) => {
  const isProperty = has('name');
  const isNotItem = negate(isProperty);
  const isFlat = none(isNotItem);
  const isNotArray = negate(is(Array));
  const getItemFromNestedObject = map(ifElse(isProperty, identity, values));
  const toArray = when(isNotArray, values);

  const getPropertyValues = pipe(
    toArray,
    getItemFromNestedObject,
    flatten,
  );

  return until(isFlat, getPropertyValues)(values(properties));
};

export const splitTokensAndComponents = ({
  size, spacing, typography, borderRadius, color, elevation, opacity, asset,
  ...components
}) => ({
  components,
  tokens: {
    asset,
    borderRadius,
    color,
    elevation,
    opacity,
    size,
    spacing,
    typography,
  },
});

export const flatTokensAndComponents = ({ properties }) => {
  const { tokens, components } = splitTokensAndComponents(properties);

  return {
    components: flattenProps(components),
    tokens: flattenProps(tokens),
  };
};

export const readAsset = (assetName) => fs.readFileSync(path.join(__dirname, '../../../assets', assetName)).toString();

export const execPattern = (pattern, data) => {
  const matches = [];
  const regex = new RegExp(pattern, 'gm');
  let match;

  do {
    match = regex.exec(data);
    if (match && match.groups) {
      matches.push(match.groups);
    }
  } while (match);

  return matches;
};

export const convertBase64ToExternalImage = (assetName) => (acc, item, index) => {
  const assetRemoteBaseUrl = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets/';
  const imageName = `${assetName}-embed-image-${index}.png`;

  fs.writeFileSync(path.join(__dirname, '../../../assets', imageName), item.imageData, 'base64');

  return acc.replace(`data:image/png;base64,${item.imageData}`, `${assetRemoteBaseUrl}${imageName}`);
};
