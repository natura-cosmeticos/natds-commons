import {
  pipe, join, mapObjIndexed, values,
} from 'ramda';
import { createElement } from './helpers';
import { store } from './store';
import jss from './styles/jss';
import { color } from './styles/global';

const tableStyles = {
  tokenTable: {
    '& td, & th': {
      border: [1, 'solid', color.gray],
      fontSize: 16,
      lineHeight: 1.5,
      padding: 8,
    },
    '& tr': {
      textAlign: 'left',
    },
    borderCollapse: 'collapse',
    borderSpacing: 0,
    marginTop: 50,
    tableLayout: 'fixed',
    width: '100%',
  },
};

const tableSheet = jss.createStyleSheet(tableStyles);

const tableHeading = '<thead><th>Name</th><th>Value</th></thead>';

const renderBody = pipe(
  mapObjIndexed((value, name) => `<tr><td>${name}</td><td>${value}</td></tr>`),
  values,
  join(''),
);

export const Table = () => {
  tableSheet.attach();
  const table = createElement('table', null, tableHeading, tableSheet.classes.tokenTable);
  const tableBody = createElement('tbody');

  store.subscribe(() => {
    tableBody.innerHTML = renderBody(store.getState().selectedTokens);
  });
  tableBody.innerHTML = renderBody(store.getState().selectedTokens);
  table.appendChild(tableBody);

  return table;
};

export default Table;
