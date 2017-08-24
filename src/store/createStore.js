import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

import repoReducer from '../reducers/repoReducer';

const configureStore = () => {
    // Combine our multiple imported reducers into one
    // which we can then pass to our store
    const reducers = combineReducers({
        repo: repoReducer
    });

    // Save our middleare so we can pass this to our store
    const middleware = applyMiddleware(createLogger(), thunk);

    // Create a new data store
    const store = createStore(reducers, middleware);

    // Test dispatch: 
    //  Set app state to fetch pending
    //  Make get request to github for a repo
    //  If succesfull set state to succesfull and save our items
    //    in the store
    //  If failed set state to fail and save the error in our store
    store.dispatch((dispatch) => {
        dispatch({ type: "FETCH_REPO_PENDING" });
        const getUrl = "https://api.github.com/search/repositories?q=de86/luna"
        axios.get(getUrl)
            .then((response) => {
                dispatch({ type: "FETCH_REPO_SUCCESS", repos: response.data.items});
            })
            .catch((err) => {
                dispatch({ type: "FETCH_REPO_FAIL", error: err});
            })
    });
}

export default configureStore;
