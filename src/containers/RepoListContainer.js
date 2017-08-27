import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import RepoList from '../components/RepoList';
import RepoSearchField from '../components/RepoSearchField';
import * as searchActionCreators from '../actions/searchActionCreators';

class RepoListContainer extends Component {
    constructor(props) {
        super(props);

        this.searchRepos = this.searchRepos.bind(this);
    }

    render() {
        return (
            <div>
                <RepoSearchField searchRepos={this.searchRepos}/>
                <RepoList
                    hasRepos={this.props.appState.fetched}
                    repos={this.props.repos}/>
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
        fetchRepoFail: searchActionCreators.fetchRepoFail
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoListContainer);
