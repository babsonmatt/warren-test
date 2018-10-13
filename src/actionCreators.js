import normalize from 'json-api-normalizer';
import companies from './data/companies.json';

export function loadCompanies(userId) {
  return function(dispatch, getState) {
    dispatch({
      type: 'LOAD_COMPANIES_REQUEST',
    });

    new Promise((resolve, reject) =>
      setTimeout(() => resolve(companies), 500),
    ).then(response => {
      dispatch({
        type: 'LOAD_COMPANIES_SUCCESS',
        response: normalize(response),
      });
    });

    // fetch(`http://myapi.com/users/${userId}/companies`).then(
    //   response =>
    //     dispatch({
    //       type: 'LOAD_COMPANIES_SUCCESS',
    //       response,
    //     }),
    //   error =>
    //     dispatch({
    //       type: 'LOAD_COMPANIES_FAILURE',
    //       error,
    //     }),
    // );
  };
}
