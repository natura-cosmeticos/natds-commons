import { createElement } from './helpers';
import { searchAction, store } from './store';
import { RadioGroup } from './Radio';
import { Search } from './Search';

const brands = [
  'aesop',
  'avon',
  'natura',
  'theBodyShop',
];

const modes = ['light', 'dark'];

const platforms = [
  'android',
  'ios',
  'reactNative',
  'web',
];

const onInputSearch = ({ target }) => store.dispatch(
  searchAction({ search: target.value }),
);

const onFormChange = ({ target }) => store.dispatch(
  searchAction({ [target.name]: target.value }),
);

export const Form = () => {
  const form = createElement('form');

  const state = store.getState();

  form.appendChild(RadioGroup('platform', platforms, state.platform, 'Platforms'));
  form.appendChild(Search(onInputSearch));
  form.appendChild(RadioGroup('brand', brands, state.brand, 'Brands'));
  form.appendChild(RadioGroup('mode', modes, state.mode, 'Modes'));

  form.addEventListener('change', onFormChange);

  return form;
};

export default Form;
