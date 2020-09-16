import { createStore } from 'redux';
import { path, prop, mergeDeepRight } from 'ramda';
import { tokens as allTokens } from './tokens';
import { searchActionType } from './actions';
import { filterTokens } from '../helpers';

const initialState = {
  allTokens,
  brand: 'natura',
  mode: 'light',
  platform: 'web',
  search: null,
  selectedTokens: allTokens.web.natura.light,
};

const onSearch = (state, { payload }) => {
  const newState = mergeDeepRight(state, payload);
  const { platform, brand, mode } = newState;

  const selectedTokens = filterTokens(
    path([platform, brand, mode], state.allTokens),
    newState.search,
  );

  return {
    ...newState,
    selectedTokens,
  };
};

const reducer = (state = initialState, action) => {
  const actionMap = {
    [searchActionType]: onSearch,
  };

  const currentAction = prop(action.type, actionMap);

  console.log({ state });
  console.log({ action });

  return currentAction ? currentAction(state, action) : { ...state };
};

export const store = createStore(reducer);

export default store;
