const repoReducer = function(state={}, action) {
    switch(action.type) {
        case "FETCH_REPO_PENDING": {
            return {
                ...state,
                repoToSearch: action.repoToSearch,
                fetching: true,
                error: null,
                repos: null
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
                error: action.error,
                repos: null
            }
        }
        default: {
            return state;
        }
    }
}

export default repoReducer;
