const appStateReducer = function (state = {
    detailViewRepo: null,
    error: null,
    fetched: false,
    fetchedReadme: false,
    fetchingReadme: false,
    fetchingRepos: false,
    readmeText: null,
    repoToSearch: null
}, action) {
    switch (action.type) {
    case 'FETCH_README_SUCCESS': {
        return {
            ...state,
            fetchedReadme: true,
            readmeText: action.readmeText,
            repoToSearch: action.repoToSearch
        }
    }
    case 'FETCH_README_FAIL': {
        return {
            ...state,
            fetchedReadme: false,
            fetchingReadme: false,
            readmeText: action.failText,
            error: action.error
        }
    }
    case 'FETCH_REPO_PENDING': {
        return {
            ...state,
            fetched: false,
            fetchingRepos: true,
            repoToSearch: action.repoToSearch
        }
    }
    case 'FETCH_REPO_SUCCESS': {
        return {
            ...state,
            fetched: true,
            fetchingRepos: false
        }
    }
    case 'FETCH_REPO_FAIL': {
        return {
            ...state,
            error: action.error,
            fetched: false,
            fetchingRepos: false
        }
    }
    case 'SET_DETAIL_VIEW_REPO': {
        return {
            ...state,
            detailViewRepo: action.repo,
            readmeText: null
        }
    }
    default: {
        return {
            ...state
        }
    }
    }
}

export default appStateReducer
