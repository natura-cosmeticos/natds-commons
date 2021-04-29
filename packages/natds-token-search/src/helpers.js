import {
  pipe, unless, map, objOf, zipObj, mapObjIndexed, isNil,
  filter, prop, contains, toLower, anyPass, toString, has,
  none, not, values, when, ifElse, identity, is, flatten,
  until,
} from 'ramda';

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

export const buildTokensForBrand = (brand) => pipe(
  map(flattenProps),
  zipObj(['light', 'dark']),
  objOf(brand),
);

const setAttribute = (element) => (attribute, key) => element.setAttribute(key, attribute);
const setContent = (element) => (content) => {
  element.innerHTML = content; // eslint-disable-line
};

export const createElement = (element, attributes, content, className) => {
  const el = document.createElement(element);

  unless(isNil, mapObjIndexed(setAttribute(el)))(attributes);
  unless(isNil, setContent(el))(content);

  if (className) {
    el.classList.add(className);
  }

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
