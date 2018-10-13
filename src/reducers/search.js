import createReducer from '../helpers/createReducer';
import actionTypes from '../actionTypes';

const initialState = '';

export const search = createReducer(initialState, {
  [actionTypes.SEARCH]: (state, action) => action.search,
});
