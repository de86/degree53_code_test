import React, { Component } from 'react';

import RepoItem from './RepoItem';

class RepoList extends Component {
    constructor(props) {
        super(props);

        this.renderRepoItem = this.renderRepoItem.bind(this);
    }
    
    render(){
        const appState = this.props.appState;
        const retrievedRepos = this.props.repos.retrieved;

        if(appState.fetching) {
            return <img src={require('../../resources/images/loading.gif')} />
        } else if(appState.fetched) {
            return (
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        { Object.keys(retrievedRepos).map(this.renderRepoItem) }
                    </ul>
                </div>
            )
        } else if(appState.error != null){
            return <h2>Oops, something went wrong. Try searching again!</h2>
        } else {
            return <h2>Search for a github repo above</h2>
        };
    }

    renderRepoItem(key) {
        const repo = this.props.repos.retrieved[key];

        return (
            <RepoItem key={repo.id} id={repo.id} name={repo.name} setRepoIdToView={this.props.setRepoIdToView}/>
        )
    }
}

export default RepoList;