import { relationships as reducer } from './relationships';
import actionTypes from '../actionTypes';

describe('relationships reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle LOAD_COMPANIES_SUCCESS', () => {
    expect(
      reducer(
        {},
        {
          type: actionTypes.LOAD_COMPANIES_SUCCESS,
          response: {
            relationship: {
              1: { id: 1 },
              2: { id: 2 },
            },
          },
        },
      ),
    ).toEqual({
      1: { id: 1 },
      2: { id: 2 },
    });
  });

  it('should handle LOAD_COMPANIES_SUCCESS and merge result', () => {
    expect(
      reducer(
        {
          3: { id: 3 },
          4: { id: 4 },
        },
        {
          type: actionTypes.LOAD_COMPANIES_SUCCESS,
          response: {
            relationship: {
              1: { id: 1 },
              2: { id: 2 },
            },
          },
        },
      ),
    ).toEqual({
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 },
      4: { id: 4 },
    });
  });
});
