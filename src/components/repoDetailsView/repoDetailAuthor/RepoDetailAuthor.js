import React from 'react';
import PropTypes from 'prop-types';

import styles from './RepoDetailAuthor.css';

const RepoDetailAuthor = (props) => {
    return <img src={props.imageURL} className={styles.avatar} />
}

RepoDetailAuthor.propTypes = {
    imageURL: PropTypes.string.isRequired,
}

export default RepoDetailAuthor;