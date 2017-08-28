import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RepoDetails from '../components/repoDetails/RepoDetails'
import RepoDetailsReadme from '../components/repoDetails/RepoDetailsReadme'

import * as detailActionCreators from '../actions/detailActionCreators';

import { getReadme } from '../api/github';

class RepoDetailView extends Component {
    constructor(props) {
        super(props)

        this.getRepoDetails = this.getRepoDetails.bind(this);
        this.getRepoReadme = this.getRepoReadme.bind(this);
    }

    render() {
        let detailViewContent = null;

        if(this.props.repoId != null) {
            const repoDetails = this.getRepoDetails(this.props.repoId);

            detailViewContent = 
                <div>
                    <RepoDetails repo={repoDetails} />
                    <button onClick={() => this.getRepoReadme(repoDetails.owner.login, repoDetails.name)}>
                        View readme
                    </button>
                    <RepoDetailsReadme readmeText={this.props.readmeText} />
                </div>;
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

    getRepoReadme(owner, repoName) {
        getReadme(owner, repoName, this.props.fetchReadmeSuccess, this.props.fetchReadmeFail);
    }
}

function mapStateToProps(state){
    return {
        repos:  state.repos.retrieved,
        repoId: state.appState.detailRepoId,
        readmeText: state.appState.readmeText
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchReadmeSuccess: detailActionCreators.fetchReadmeSuccess,
        fetchReadmeFail: detailActionCreators.fetchReadmeFail
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetailView);