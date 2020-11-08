import { handleActions } from 'redux-actions';
import * as actionTypes from '../constants/actionTypes';
import update from 'immutability-helper';

const initalState = {
  newsDetails: {},
};

const setDetail = (state, action) =>
  update(state, {
    newsDetails: { $set: action.payload }
  });

export default handleActions(
  {
    [actionTypes.NEWS_DETAILS]: setDetail
  },
  initalState
);
