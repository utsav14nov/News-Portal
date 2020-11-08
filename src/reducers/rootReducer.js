import { combineReducers } from 'redux';
import home from './homeReducer';
import details from './detailsReducer';

export default combineReducers({
  home,
  details
});
