import { createAction } from 'redux-actions';
import * as actionTypes from '../constants/actionTypes';


export const newsSourceRequestStart = createAction(
  actionTypes.NEWS_SOURCE_REQUEST_START
);
export const newsSourceRequestSuccess = createAction(
  actionTypes.NEWS_SOURCE_REQUEST_SUCCESS
);
export const newsSourceRequestError = createAction(
  actionTypes.NEWS_SOURCE_REQUEST_ERROR
);

export const topNewsRequestStart = createAction(
  actionTypes.TOP_NEWS_REQUEST_START
);
export const topNewsRequestSuccess = createAction(
  actionTypes.TOP_NEWS_REQUEST_SUCCESS
);
export const topNewsRequestError = createAction(
  actionTypes.TOP_NEWS_REQUEST_ERROR
);

export const newsRequestStart = createAction(
  actionTypes.NEWS_REQUEST_START
);
export const newsRequestSuccess = createAction(
  actionTypes.NEWS_REQUEST_SUCCESS
);
export const newsRequestError = createAction(
  actionTypes.NEWS_REQUEST_ERROR
);

export const totalResultFetched = createAction(
	actionTypes.TOTAL_NEWS_RESULTS
);

export const setNewsDetails = createAction(
  actionTypes.NEWS_DETAILS
);

