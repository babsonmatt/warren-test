import { combineReducers } from 'redux';
import { companies } from './companies';
import { members } from './members';
import { relationships } from './relationships';
import { search } from './search';

const warrenTestApp = combineReducers({
  companies,
  members,
  relationships,
  search,
});

export default warrenTestApp;
