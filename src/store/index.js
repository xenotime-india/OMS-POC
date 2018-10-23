import {
  createStore as _createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { db } from './../service/sqlite';
import { SQLite } from 'expo';
import { reducers, actions } from './modules';
import { persistentStore, persistentReducer } from 'redux-pouchdb-plus';
/**
 * Root states types.
 */
export { States } from './modules';

// Apply thunk middleware
const middleware = applyMiddleware(thunk);
/**
 * Create app store.
 */
const createStore = (data = {}) => {
  const storeWithMiddleware = compose(
    middleware,
    persistentStore({ db })
  )(_createStore);

  return storeWithMiddleware(
    persistentReducer(combineReducers(reducers)),
    data
  );
};

export { createStore, actions };
