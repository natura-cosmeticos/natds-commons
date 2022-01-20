import { createStore } from 'redux'
import { path, prop, mergeDeepRight } from 'ramda'
import { tokens as allTokens } from './tokens'
import { searchActionType } from './actions'
import { filterTokens } from '../helpers'

const initialState = {
  allTokens,
  brand: 'natura',
  deprecatedTokens: allTokens.web.natura.light.deprecatedTokens,
  mode: 'light',
  platform: 'web',
  search: null,
  selectedTokens: allTokens.web.natura.light.allTokens
}

// eslint-disable-next-line max-lines-per-function
const onSearch = (state, { payload }) => {
  const newState = mergeDeepRight(state, payload)
  const { platform, brand, mode } = newState

  const selectedTokens = filterTokens(
    path([platform, brand, mode, 'allTokens'], allTokens),
    newState.search
  )

  const deprecatedTokens = filterTokens(
    path([platform, brand, mode, 'deprecatedTokens'], allTokens),
    newState.search
  )

  return {
    ...newState,
    deprecatedTokens,
    selectedTokens
  }
}

const reducer = (state = initialState, action) => {
  const actionMap = {
    [searchActionType]: onSearch
  }

  const currentAction = prop(action.type, actionMap)

  return currentAction ? currentAction(state, action) : { ...state }
}

export const store = createStore(reducer)

export default store
