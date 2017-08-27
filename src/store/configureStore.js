import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import repoReducer from '../reducers/repoReducer';
import appStateReducer from '../reducers/appStateReducer'

// Combine our multiple imported reducers into one
// which we can then pass to our store
const reducers = combineReducers({
    repos: repoReducer,
    appState: appStateReducer
});

// Save our middleare so we can pass this to our store
const middleware = applyMiddleware(createLogger(), thunk);

// Create a new data store
export default createStore(reducers, middleware);
