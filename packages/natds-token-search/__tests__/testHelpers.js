import { mapObjIndexed } from 'ramda';

export const createMockElement = (el, attrs, content) => {
  const element = document.createElement(el);

  if (attrs) {
    mapObjIndexed((value, attribute) => element.setAttribute(attribute, value), attrs);
  }

  if (content) {
    element.innerHTML = content;
  }

  return element;
};

export default createMockElement;
