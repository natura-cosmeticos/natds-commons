import {
  pipe, unless, objOf, zipObj, mapObjIndexed, isNil,
  pickBy, or, contains, toLower, toString
} from 'ramda'

export const buildTokensForBrand = (brand) => pipe(
  zipObj(['light', 'dark']),
  objOf(brand)
)

const setAttribute = (element) => (attribute, key) => element.setAttribute(key, attribute)
const setContent = (element) => (content) => {
  element.innerHTML = content; // eslint-disable-line
}

export const createElement = (element, attributes, content, className) => {
  const el = document.createElement(element)

  unless(isNil, mapObjIndexed(setAttribute(el)))(attributes)
  unless(isNil, setContent(el))(content)

  if (className) {
    el.classList.add(className)
  }

  return el
}

const compareToSearch = (search) => pipe(toString, toLower, contains(toLower(search)))

const searchRules = (search) => (value, key) => or(
  compareToSearch(search)(key),
  compareToSearch(search)(value)
)

export const filterTokens = (tokens, search) => {
  if (!search) return tokens

  return pickBy(searchRules(search), tokens)
}
