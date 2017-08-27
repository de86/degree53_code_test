const appStateReducer = function(state={}, action) {
    switch(action.type) {
        case "FETCH_REPO_PENDING": {
            return {
                ...state,
                error: null,
                fetched: false,
                fetching: true,
                repoToSearch: action.repoToSearch
            }
        }
        case "FETCH_REPO_SUCCESS": {
            return {
                ...state,
                error: null,
                fetched: true,
                fetching: false,
                repoToSearch: null
            }
        }
        case "FETCH_REPO_FAIL": {
            return {
                ...state,
                error: action.error,
                fetched: false,
                fetching: false,
                repoToSearch: null
            }
        }
        default: {
            return state
        }
    }
}

export default appStateReducer;