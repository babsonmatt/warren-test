import configureMockStore from 'redux-mock-store';
import normalize from 'json-api-normalizer';
import thunk from 'redux-thunk';
import actionTypes from './actionTypes';
import companies from './data/companies.json';
import { loadCompanies } from './actionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loadCompanies action creator', () => {
  it('creates LOAD_COMPANIES_REQUEST and LOAD_COMPANIES_SUCCESS when fetching companies', async () => {
    const expectedActions = [
      { type: actionTypes.LOAD_COMPANIES_REQUEST },
      {
        type: actionTypes.LOAD_COMPANIES_SUCCESS,
        response: normalize(companies),
      },
    ];

    const store = mockStore({
      companies: {},
      members: {},
      relationships: {},
      search: '',
    });
    await store.dispatch(loadCompanies());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
