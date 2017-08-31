export const setDetailViewRepo = (repo) => {
    return {
        type: 'SET_DETAIL_VIEW_REPO',
        repo: repo
    }
}

export const fetchReadmeSuccess = (readmeText) => {
    return {
        type: 'FETCH_README_SUCCESS',
        readmeText: readmeText
    }
}

export const fetchReadmeFail = (error) => {
    return {
        type: 'FETCH_README_FAIL',
        error: error,
        failText: "Sorry, This repo doesn't have a readme"
    }
}
