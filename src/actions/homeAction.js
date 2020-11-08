import axios from 'axios';
import { API_BASE_URL, API_KEY, PAGE_SIZE, COUNTRY, CATEGORY } from '../constants';
import * as actions from './index';

export const newsSourceRequest = () => {
  return dispatch => {
    dispatch(actions.newsSourceRequestStart());
    axios({
      method: 'GET',
      url: `${API_BASE_URL}/v2/sources?country=${COUNTRY}&category=${CATEGORY}&apiKey=${API_KEY}`
    })
      .then(function(response) {
        if (response.status === 200) {
          if (response.data.status === "ok" && response.data.sources) {
            dispatch(
              actions.newsSourceRequestSuccess(response.data.sources)
            );
          } else {
            dispatch(actions.newsSourceRequestError());
          }
        } else {
          dispatch(actions.newsSourceRequestError());
        }
      })
      .catch(function() {
        dispatch(actions.newsSourceRequestError());
      });
  };
};

export const topNewsRequest = (source,page) => {
  return dispatch => {
    dispatch(actions.topNewsRequestStart());
    axios({
      method: 'GET',
      url: `${API_BASE_URL}/v2/top-headlines?sources=${source}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`
    })
      .then(function(response) {
        if (response.status === 200) {
          if (response.data.status === "ok" && response.data.articles) {
            dispatch(
              actions.topNewsRequestSuccess(response.data.articles)
            );
          } else {
            dispatch(actions.topNewsRequestError());
          }
        } else {
          dispatch(actions.topNewsRequestError());
        }
      })
      .catch(function() {
        dispatch(actions.topNewsRequestError());
      });
  };
};

export const newsRequest = (source,page) => {
  return dispatch => {
    dispatch(actions.newsRequestStart());
    axios({
      method: 'GET',
      url: `${API_BASE_URL}/v2/everything?sources=${source}&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}`
    })
      .then(function(response) {
        if (response.status === 200) {
          if (response.data.status === "ok" && response.data.articles) {
            dispatch(
              actions.newsRequestSuccess(response.data.articles)
            );
            dispatch(
              actions.totalResultFetched(response.data.totalResults)
            )
          } else {
            dispatch(actions.newsRequestError());
          }
        } else {
          dispatch(actions.newsRequestError());
        }
      })
      .catch(function() {
        dispatch(actions.newsRequestError());
      });
  };
};

export const setNewsDetailsAction = (info) => {
  return dispatch => {
    dispatch(actions.setNewsDetails(info));
  };
};