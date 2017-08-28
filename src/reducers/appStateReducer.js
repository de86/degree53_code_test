const appStateReducer = function(state={}, action) {
    switch(action.type) {
        case "FETCH_REPO_PENDING": {
            return {
                ...state,
                detailRepoId: null,
                error: null,
                fetched: false,
                fetching: true,
                repoToSearch: action.repoToSearch
            }
        }
        case "FETCH_REPO_SUCCESS": {
            return {
                ...state,
                detailRepoId: null,
                error: null,
                fetched: true,
                fetching: false,
                repoToSearch: null
            }
        }
        case "FETCH_REPO_FAIL": {
            return {
                ...state,
                detailRepoId: null,
                error: action.error,
                fetched: false,
                fetching: false,
                repoToSearch: null
            }
        }
        case "SET_DETAIL_VIEW_ID": {
            return {
                ...state,
                detailRepoId: action.repoId
            }
        }
        default: {
            return state
        }
    }
}

export default appStateReducer;