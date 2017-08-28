const appStateReducer = function(state={}, action) {
    switch(action.type) {
        case "FETCH_REPO_PENDING": {
            return {
                ...state,
                detailRepoId: null,
                error: null,
                fetched: false,
                fetchingReadme: false,
                fetchingRepos: true,
                repoToSearch: action.repoToSearch
            }
        }
        case "FETCH_README_SUCCESS": {
            return {
                ...state,
                readmeText: action.readmeText,
            }
        }
        case "FETCH_README_FAIL": {
            return {
                ...state,
                fetchingReadme: false,
                readmeText: action.failText,
                error: action.error
            }
        }
        case "FETCH_REPO_SUCCESS": {
            return {
                ...state,
                detailRepoId: null,
                error: null,
                fetched: true,
                fetchingReadme: false,
                fetchingRepos: false,
                repoToSearch: null
            }
        }
        case "FETCH_REPO_FAIL": {
            return {
                ...state,
                detailRepoId: null,
                error: action.error,
                fetched: false,
                fetchingReadme: false,
                fetchingRepos: false,
                repoToSearch: null
            }
        }
        case "SET_DETAIL_VIEW_ID": {
            return {
                ...state,
                detailRepoId: action.repoId,
                readmeText: null
            }
        }
        default: {
            return state
        }
    }
}

export default appStateReducer;