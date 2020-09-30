import { createElement } from './helpers';
import jss from './styles/jss';
import { color } from './styles/global';

const inputStyles = {
  input: {
    border: [1, 'solid', color.gray],
    padding: 8,
    width: 480,
  },
  wrapper: {
    margin: [[30, 0]],
  },
};

const sheet = jss.createStyleSheet(inputStyles);

export const Search = (onInput) => {
  sheet.attach();
  const title = createElement('h5', null, 'Search');
  const input = createElement('input', { type: 'search' }, null, sheet.classes.input);
  const wrapper = createElement('div', null, null, sheet.classes.wrapper);

  input.addEventListener('input', onInput);

  wrapper.appendChild(title);
  wrapper.appendChild(input);

  return wrapper;
};

export default Search;
