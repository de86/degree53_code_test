const repoReducer = function(state={}, action) {
    switch(action.type) {
        case "FETCH_REPO_PENDING": {
            return {
                ...state,
                fetching: true,
            };
        }
        case "FETCH_REPO_SUCCESS": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                repos: action.repos
            }
        }
        case "FETCH_REPO_FAIL": {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}

export default repoReducer;
