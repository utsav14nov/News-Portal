import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['home', 'details']
};

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistedStore = createStore(
  persistedReducer,
  applyMiddleware(thunk, ...middleware)
);

const persistor = persistStore(persistedStore);

export { persistedStore, persistor };
