import { createElement } from './helpers';
import jss from './styles/jss';

const inputStyles = {
  input: {
    border: [1, 'solid', '#DFDFDF'],
    margin: [[30, 0]],
    padding: 8,
    width: 480,
  },
};

const sheet = jss.createStyleSheet(inputStyles);

export const Search = (onInput) => {
  sheet.attach();
  const input = createElement('input', { type: 'search' }, null, sheet.classes.input);

  input.addEventListener('input', onInput);

  return input;
};

export default Search;
