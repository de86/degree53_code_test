export const fetchRepoPending = (repoName) => {
    return {
        type: 'FETCH_REPO_PENDING',
        repoNameToSearch: repoName
    }
}

export const fetchRepoSuccess = (repos) => {
    return {
        type: 'FETCH_REPO_SUCCESS',
        repos: repos
    }
}

export const fetchRepoFail = (error) => {
    return {
        type: 'FETCH_REPO_FAIL',
        error: error
    }
}
