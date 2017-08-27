export const fetchRepoPending = (repoName) => {
    return {
        type: "FETCH_REPO_PENDING",
        repoNameToSearch: repoName
    };
};

export const fetchRepoSuccess = (repos) => {
    return {
        type: "FETCH_REPO_SUCCESS",
        repos: repos
    };
};

export const fetchRepoFail = (err) => {
    return {
        type: "FETCH_REPO_FAIL",
        error: err
    };
};