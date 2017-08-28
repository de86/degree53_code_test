import React from 'react';

const RepoDetail = (props) => {
    return (
        <div>
            <span>
                {`${props.labelText}: `}
            </span>
            { props.detail }
        </div>
    )
}

export default RepoDetail;