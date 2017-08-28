import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import RepoDetailContainer from './RepoDetailContainer';
import RepoList from '../components/repoList/RepoList';
import RepoSearchField from '../components/repoList/RepoSearchField';

import * as searchActionCreators from '../actions/searchActionCreators';
import * as detailActionCreators from '../actions/detailActionCreators';

class RepoListContainer extends Component {
    constructor(props) {
        super(props);

        this.searchRepos = this.searchRepos.bind(this);
        this.setRepoIdToView = this.setRepoIdToView.bind(this);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <RepoSearchField searchRepos={this.searchRepos}/>
                        <RepoList
                            appState={this.props.appState}
                            repos={this.props.repos}
                            setRepoIdToView={this.setRepoIdToView} />
                    </div>
                    <div className="col-sm-8">
                        <RepoDetailContainer />
                    </div>
                </div>
            </div>
        )
    }

    // Puts the app into a pending state while retreiving repos from
    // github. saves repos in our store if succesfull else saves the error
    searchRepos(searchString) {
        this.props.fetchRepoPending(searchString);
        const getUrl = `https://api.github.com/search/repositories?q=${searchString}`

        axios.get(getUrl)
            .then((response) => {
                this.props.fetchRepoSuccess(response.data.items);
            })
            .catch((err) => {
                this.props.fetchRepoFail(err);
            });
    }

    setRepoIdToView(id) {
        // Prevent another dispatch and re-render if we are already viewing
        // the given ID
        if(id != this.props.appState.detailRepoId) {
            this.props.setDetailViewId(id);
        }
    }
}

// Makes store data available through props
function mapStateToProps(state) {
    return {
        repos: state.repos,
        appState: state.appState
    }
};

// Allows us to call our action creators from props without the need
// to wrap them in dispatch()
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchRepoPending: searchActionCreators.fetchRepoPending,
        fetchRepoSuccess: searchActionCreators.fetchRepoSuccess,
        fetchRepoFail: searchActionCreators.fetchRepoFail,
        setDetailViewId: detailActionCreators.setDetailViewId
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoListContainer);
