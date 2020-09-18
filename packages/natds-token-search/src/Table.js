import { pipe, join, map } from 'ramda';
import { createElement } from './helpers';
import { store } from './store';
import jss from './styles/jss';

const tableStyles = {
  tokenTable: {
    '& td, & th': {
      border: [1, 'solid', '#DFDFDF'],
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
  map((item) => `<tr><td>${item.name}</td><td>${item.value}</td></tr>`),
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
