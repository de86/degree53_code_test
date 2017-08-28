import React from 'react';
import PropTypes from 'prop-types';

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

RepoDetail.propTypes = {
    labelText: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired
}

export default RepoDetail;