import { createElement } from './helpers';

export const Radio = (name, value, checked) => {
  const label = createElement('label', { for: value }, value);

  const input = createElement('input', {
    id: value,
    name,
    type: 'radio',
    value,
    ...(checked ? { checked: true } : {}),
  });

  const wrapper = createElement('span');

  wrapper.appendChild(input);
  wrapper.appendChild(label);

  return wrapper;
};

export const RadioGroup = (name, data, selected) => {
  const wrapper = createElement('div');

  wrapper.classList.add(name);

  data.forEach((item) => {
    wrapper.appendChild(Radio(name, item, selected === item));
  });

  return wrapper;
};
