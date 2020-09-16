import {
  pipe, unless, map, objOf, zipObj, mapObjIndexed, isNil,
  filter, prop, contains, toLower, anyPass, toString,
} from 'ramda';

export const flattenData = (properties) => {
  const mapProps = (item) => Object.values(item).map(checkIfHasName); // eslint-disable-line
  const checkIfHasName = (item) => (item.name ? item : mapProps(item));

  return mapProps(properties).flat(2);
};

export const buildTokensForBrand = (brand) => pipe(
  map(flattenData),
  zipObj(['light', 'dark']),
  objOf(brand),
);

const setAttribute = (element) => (attribute, key) => element.setAttribute(key, attribute);
const setContent = (element) => (content) => {
  element.innerHTML = content; // eslint-disable-line
};

export const createElement = (element, attributes, content) => {
  const el = document.createElement(element);

  unless(
    isNil,
    mapObjIndexed(setAttribute(el)),
  )(attributes);

  unless(
    isNil,
    setContent(el),
  )(content);

  return el;
};

const searchRules = (search) => anyPass([
  pipe(prop('name'), toLower, contains(toLower(search))),
  pipe(prop('value'), toString, toLower, contains(toLower(search))),
]);

export const filterTokens = (tokens, search) => {
  if (!search) return tokens;

  return filter(searchRules(search), tokens);
};
