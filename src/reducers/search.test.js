import { search as reducer } from './search';
import actionTypes from '../actionTypes';

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, '')).toEqual('');
  });

  it('should handle SEARCH', () => {
    expect(
      reducer(
        '',
        {
          type: actionTypes.SEARCH,
          search: 'test'
        },
      ),
    ).toEqual('test');
  });
});
