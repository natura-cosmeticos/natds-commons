import { pipe, join, map } from 'ramda';
import { createElement } from './helpers';
import { store } from './store';

const renderBody = pipe(
  map((item) => `<tr><td>${item.name}</td><td>${item.value}</td></tr>`),
  join(''),
);

const tableHeading = '<thead><th>Name</th><th>Value</th></thead>';

export const Table = () => {
  const table = createElement('table', null, tableHeading);
  const tableBody = createElement('tbody');

  store.subscribe(() => {
    tableBody.innerHTML = renderBody(store.getState().selectedTokens);
  });

  tableBody.innerHTML = renderBody(store.getState().selectedTokens);
  table.appendChild(tableBody);

  return table;
};

export default Table;
