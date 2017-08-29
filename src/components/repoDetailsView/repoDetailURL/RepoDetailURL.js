import React from 'react'

const RepoDetailURL = (props) => {
    return (
        <div>
            <span>
                {`${props.labelText}: `}
            </span>
            <a href={ props.url } target="_blank">{ props.detail }</a>
        </div>
    )
}

export default RepoDetailURL
