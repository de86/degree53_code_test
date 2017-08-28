import React from 'react';

const RepoItem = (props) => {
    return (
        <li onClick={() => props.setRepoIdToView(props.id)}>{props.name}</li>
    )
}

export default RepoItem;