import { store } from '../src/store';
import { Table } from '../src/Table';

const allTokens = [
  {
    name: 'color',
    value: '#ffffff'
  },
  {
    name: 'opacity',
    value: 1
  }
]

const state = {
  allTokens,
  brand: 'natura',
  mode: 'light',
  platform: 'web',
  search: null,
  selectedTokens: allTokens,
};

describe('Table', () => {
  beforeEach(() => {
    jest.spyOn(store, 'getState').mockReturnValue(state);
  });
  it('should render table', () => {
    const table = Table()

    expect(table).toMatchSnapshot();
  });

  it('should update table on store changes', () => {
    const table = Table()
    jest.spyOn(store, 'getState').mockReturnValue({ ...state, selectedTokens: [allTokens[0]] });
    store.dispatch({ type: 'ACTION' })

    expect(table).toMatchSnapshot();
  });
});
