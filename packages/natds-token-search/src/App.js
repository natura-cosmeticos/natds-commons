import { Table } from './Table';
import { Form } from './Form';
import { createElement } from './helpers';

export const App = () => {
  const wrapper = createElement('div');

  wrapper.appendChild(Form());
  wrapper.appendChild(Table());

  return wrapper;
};

export default App;
