import React from 'react';
import PropTypes from 'prop-types';

import RepoDetail from '../repoDetail/RepoDetail';
import RepoDetailURL from '../repoDetailURL/RepoDetailURL';
import RepoDetailAuthor from '../repoDetailAuthor/RepoDetailAuthor';

import styles from './RepoDetails.css';
import commonStyles from '../../../resources/css/common.css'

const RepoDetails = (props) => {
    const repo = props.repo
    return (
        <div className={styles.repoDetailsContainer}>
            <div className={`${commonStyles.padding} ${styles.avatarContainer}`}>
                <RepoDetailAuthor imageURL={repo.owner.avatar_url} />
            </div>
            <div className={`${commonStyles.padding} ${styles.detailsContainer}`}>
                <h4>{repo.name}</h4>
                <RepoDetailURL labelText="Author" url={repo.owner.html_url} detail={repo.owner.login} />
                <RepoDetailURL labelText="Repo URL" url={repo.html_url} detail={repo.html_url} />
                <RepoDetail labelText="Description" detail={repo.description} />
                <RepoDetail labelText="Forks" detail={repo.forks.toString()} />
                <RepoDetail labelText="Open Issues" detail={repo.open_issues.toString()} />
                <RepoDetail labelText="Watchers" detail={repo.watchers.toString()} />
            </div>
        </div>
    )
}

RepoDetails.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoDetails;