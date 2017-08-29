const repoReducer = function (state = {
    retrieved: {},
    resultsPage: 1
}, action) {
    switch (action.type) {
    case 'FETCH_REPO_PENDING': {
        return {
            ...state,
            retrieved: {}
        }
    }
    case 'FETCH_REPO_SUCCESS': {
        return {
            ...state,
            retrieved: action.repos,
            repoToSearch: action.repoToSearch
        }
    }
    case 'FETCH_REPO_FAIL': {
        return {
            ...state,
            retrieved: {}
        }
    }
    case 'SET_RESULTS_PAGE': {
        return {
            ...state,
            resultsPage: action.resultsPage
        }
    }
    default: {
        return {
            ...state
        }
    }
    }
}

export default repoReducer
