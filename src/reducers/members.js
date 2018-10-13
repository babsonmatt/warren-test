import createReducer from '../helpers/createReducer';
import actionTypes from '../actionTypes';

const initialState = {};

export const members = createReducer(initialState, {
  [actionTypes.LOAD_COMPANIES_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.response.member,
    };
  },
});
