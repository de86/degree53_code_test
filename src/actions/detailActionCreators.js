export const setDetailViewId = (id) => {
    return {
        type: "SET_DETAIL_VIEW_ID",
        repoId: id
    }
}

export const fetchReadmeSuccess = (readmeText) => {
    return {
        type: "FETCH_README_SUCCESS",
        readmeText: readmeText
    }
}

export const fetchReadmeFail = (error) => {
    return {
        type: "FETCH_README_FAIL",
        error: error,
        failText: "Sorry, This repo doesn't have a readme"
    }
}