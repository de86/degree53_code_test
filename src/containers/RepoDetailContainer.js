import React, { Component } from 'react';
import { connect } from 'react-redux';

import RepoDetails from '../components/repoDetails/RepoDetails'

class RepoDetailView extends Component {
    constructor(props) {
        super(props)

        this.getRepoDetails = this.getRepoDetails.bind(this);
    }

    render() {
        let detailViewContent = null;

        if(this.props.repoId != null) {
            const repoDetails = this.getRepoDetails(this.props.repoId);
            console.log(repoDetails);
            detailViewContent = <RepoDetails repo={repoDetails} />;
        } else {
            detailViewContent = <h4>Please click on a repository name to view more details</h4>
        }
        
        return (
            <div>
                { detailViewContent }
            </div>
        )

    }

    // Returns an object containing a repository's details
    // given an ID
    getRepoDetails(id) {
        let repoToView = {}
        this.props.repos.forEach((repo) => {
            if(repo.id == this.props.repoId){
                repoToView = repo;
            }
        });

        return repoToView;
    }
}

function mapStateToProps(state){
    return {
        repos:  state.repos.retrieved,
        repoId: state.appState.detailRepoId
    }
};

export default connect(mapStateToProps)(RepoDetailView);