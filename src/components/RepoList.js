import React, { Component } from 'react';

import RepoItem from './RepoItem';

class RepoList extends Component {
    constructor(props) {
        super(props);

        this.renderRepoItem = this.renderRepoItem.bind(this);
    }
    
    render(){
        if(this.props.hasRepos) {
            return (
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        { Object.keys(this.props.repos.retrieved).map(this.renderRepoItem) }
                    </ul>
                </div>
            )
        } else {
            return <h2>Please search repositories above ^</h2>
        };
    }

    renderRepoItem(key) {
        const repo = this.props.repos.retrieved[key];

        return (
            <RepoItem key={repo.id} name={repo.name} />
        )
    }
}

export default RepoList;