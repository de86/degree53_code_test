import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './repoDetailReadme.css';
import commonStyles from '../../../resources/css/common.css';

class RepoDetailsReadme extends Component {
    render(){
        return (
            <div className={`${commonStyles.padding} ${styles.readmeTextContainer}`}>
                <p className={styles.readmeText}>{this.props.readmeText}</p>
            </div>
        )
    }
}

RepoDetailsReadme.propTypes = {
    readmeText: PropTypes.string.isRequired
}

export default RepoDetailsReadme;