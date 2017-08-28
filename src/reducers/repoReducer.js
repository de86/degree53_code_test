const repoReducer = function(state={}, action) {
    switch(action.type) {
        case "FETCH_REPO_PENDING": {
            return {
                ...state,
                retrieved: {}
            };
        }
        case "FETCH_REPO_SUCCESS": {
            return {
                ...state,
                retrieved: action.repos
            };
        }
        case "FETCH_REPO_FAIL": {
            return {
                ...state,
                retrieved: {}
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}

export default repoReducer;
