export const fetchRepoPending = (repoName) => {
    return {
        type: 'FETCH_REPO_PENDING',
        repoNameToSearch: repoName
    }
}

export const fetchRepoSuccess = (repos, repoToSearch) => {
    return {
        type: 'FETCH_REPO_SUCCESS',
        repos: repos,
        repoToSearch: repoToSearch
    }
}

export const fetchRepoFail = (error) => {
    return {
        type: 'FETCH_REPO_FAIL',
        error: error
    }
}

export const setResultsPage = (pageNumber) => {
    return {
        type: 'SET_RESULTS_PAGE',
        resultsPage: pageNumber
    }
}
