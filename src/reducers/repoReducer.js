const repoReducer = function(state={}, action) {
    switch(action.type) {
        case "FETCH_REPO_SUCCESS": {
            return {
                ...state,
                retrieved: action.repos
            };
        }
        default: {
            return {
                ...state,
                retrieved: null
            };
        }
    }
}

export default repoReducer;
