import { mapObjIndexed } from 'ramda';

export const createMockElement = (el, attrs, content) => {
  const element = document.createElement('div');

  if(attrs){
    mapObjIndexed((value, attribute) => element.setAttribute(attribute, value));
  }

  if(content){
    element.innerHTML = content;
  }

  return element;
};
