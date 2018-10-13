import normalize from 'json-api-normalizer';
import companies from './data/companies.json';

export function loadCompanies() {
  return function(dispatch) {
    dispatch({
      type: 'LOAD_COMPANIES_REQUEST',
    });

    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(companies), 500),
    )
      .then(response => {
        dispatch({
          type: 'LOAD_COMPANIES_SUCCESS',
          response: normalize(response),
        });
      })
      .catch(e =>
        dispatch({
          type: 'LOAD_COMPANIES_FAILURE',
          e,
        }),
      );
  };
}
