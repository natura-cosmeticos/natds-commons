import { createElement } from './helpers';

export const Search = (onInput) => {
  const input = createElement('input', { type: 'search' });

  input.addEventListener('input', onInput);

  return input;
};

export default Search;
