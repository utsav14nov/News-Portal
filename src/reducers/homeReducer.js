import { handleActions } from 'redux-actions';
import * as actionTypes from '../constants/actionTypes';
import update from 'immutability-helper';

const initalState = {
  newsSourceRequestStatus: 'init',
  newsSource: [],
  topNewsRequestStatus: 'init',
  topNews:[],
  newsRequestStatus: 'init',
  news:[],
  totalNewsResult:0
};

const newsSourceRequestStart = (state, action) =>
  update(state, {
    newsSourceRequestStatus: { $set: 'init' },
  });

const newsSourceRequestSuccess = (state, action) =>
  update(state, {
    newsSourceRequestStatus: { $set: true },
    newsSource:{ $set: action.payload }
  });

const newsSourceRequestError = (state, action) =>
  update(state, {
    newsSourceRequestStatus: { $set: false },
    newsSource:[]
  });

const topNewsRequestStart = (state, action) =>
  update(state, {
    topNewsRequestStatus: { $set: 'init' },
  });

const topNewsRequestSuccess = (state, action) =>
  update(state, {
    topNewsRequestStatus: { $set: true },
    topNews:{ $set: action.payload }
  });

const topNewsRequestError = (state, action) =>
  update(state, {
    newsRequestStatus: { $set: false },
    topNews:[]
  });

const newsRequestStart = (state, action) =>
  update(state, {
    newsRequestStatus: { $set: 'init' },
  });

const newsRequestSuccess = (state, action) =>
  update(state, {
    newsRequestStatus: { $set: true },
    news:{ $set: action.payload }
  });

const newsRequestError = (state, action) =>
  update(state, {
    newsRequestStatus: { $set: false },
    news:[]
  });

const setTotalNewsResult = (state, action) =>
  update(state, {
    totalNewsResult: { $set: action.payload }
  });

export default handleActions(
  {
    [actionTypes.NEWS_SOURCE_REQUEST_START]: newsSourceRequestStart,
    [actionTypes.NEWS_SOURCE_REQUEST_SUCCESS]: newsSourceRequestSuccess,
    [actionTypes.NEWS_SOURCE_REQUEST_ERROR]: newsSourceRequestError,
    [actionTypes.TOP_NEWS_REQUEST_START]: topNewsRequestStart,
    [actionTypes.TOP_NEWS_REQUEST_SUCCESS]: topNewsRequestSuccess,
    [actionTypes.TOP_NEWS_REQUEST_ERROR]: topNewsRequestError,
    [actionTypes.NEWS_REQUEST_START]: newsRequestStart,
    [actionTypes.NEWS_REQUEST_SUCCESS]: newsRequestSuccess,
    [actionTypes.NEWS_REQUEST_ERROR]: newsRequestError,
    [actionTypes.TOTAL_NEWS_RESULTS]: setTotalNewsResult
  },
  initalState
);
