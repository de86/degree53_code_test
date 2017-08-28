import React from 'react';

import RepoDetail from './RepoDetail';
import RepoDetailURL from './RepoDetailURL';
import RepoDetailAuthor from './RepoDetailAuthor';

const RepoDetails = (props) => {
    const repo = props.repo
    return (
        <div>
            <h4>{repo.name}</h4>
            <RepoDetailAuthor imageURL={repo.owner.avatar_url} />
            <RepoDetailURL labelText="Author" url={repo.owner.html_url} detail={repo.owner.login} />
            <RepoDetailURL labelText="Repo URL" url={repo.html_url} detail={repo.html_url} />
            <RepoDetail labelText="Description" detail={repo.description} />
            <RepoDetail labelText="Forks" detail={repo.forks} />
            <RepoDetail labelText="Open Issues" detail={repo.open_issues} />
            <RepoDetail labelText="Watchers" detail={repo.watchers} />
        </div>
    )
}

export default RepoDetails;