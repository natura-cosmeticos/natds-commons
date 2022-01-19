import { store } from '../src/store'
import { Table } from '../src/Table'

const allTokens = {
  borderRadius: 8,
  color: '#ffffff',
  opacity: 1
}

const deprecatedTokens = {
  borderRadius: 8
}

const state = {
  allTokens,
  brand: 'natura',
  deprecatedTokens,
  mode: 'light',
  platform: 'web',
  search: null,
  selectedTokens: allTokens
}

describe('Table', () => {
  beforeEach(() => {
    jest.spyOn(store, 'getState').mockReturnValue(state)
  })
  it('should render table', () => {
    const table = Table()

    expect(table).toMatchSnapshot()
  })

  it('should update table on store changes', () => {
    const table = Table()

    jest.spyOn(store, 'getState').mockReturnValue({ ...state, selectedTokens: { color: '#ffffff' } })
    store.dispatch({ type: 'ACTION' })

    expect(table).toMatchSnapshot()
  })
})
