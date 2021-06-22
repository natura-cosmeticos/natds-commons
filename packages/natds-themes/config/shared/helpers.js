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
} from 'ramda';

export const isProp = (propName) => pipe(prop('path'), includes(propName));
export const flipIsProp = flip(uncurryN(2, isProp));
export const isOneOfProps = (property) => (dic) => any(flipIsProp(dic))(property);
export const isPrivateProp = isProp('platform');
export const isAsset = isProp('asset');

export const flattenProps = (properties) => {
  const isProperty = has('name');
  const isNotItem = pipe(isProperty, not);
  const isFlat = none(isNotItem);
  const isNotArray = pipe(is(Array), not);
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

export const readAsset = (assetName) => fs.readFileSync(path.join(__dirname, '../../assets/logo', assetName)).toString();
