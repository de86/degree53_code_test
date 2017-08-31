import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RepoList from '../../components/repoList/RepoList'
import RepoSearchField from '../../components/repoList/RepoSearchField'

import * as searchActionCreators from '../../actions/searchActionCreators'
import * as detailActionCreators from '../../actions/detailActionCreators'

import { getRepos } from '../../api/github'

import commonStyles from '../../resources/css/common.css'

class RepoListContainer extends Component {
    constructor (props) {
        super(props)

        this.searchRepos = this.searchRepos.bind(this)
        this.setDetailViewRepo = this.setDetailViewRepo.bind(this)
        this.setResultsPage = this.setResultsPage.bind(this)
    }

    render () {
        return (
            <div className={commonStyles.padding}>
                <RepoSearchField
                    page={this.props.repos.resultsPage}
                    searchRepos={this.searchRepos} />
                <RepoList
                    appState={this.props.appState}
                    repos={this.props.repos}
                    setDetailViewRepo={this.setDetailViewRepo}
                    searchRepos={this.searchRepos}
                    setResultsPage={this.props.setResultsPage} />
            </div>
        )
    }

    // Puts the app into a pending state while retreiving repos from
    // github. saves repos in our store if successful else saves the error
    searchRepos (searchString, pageNumber) {
        this.props.setResultsPage(pageNumber)
        this.props.fetchRepoPending(searchString)
        getRepos(searchString, pageNumber, this.props.fetchRepoSuccess, this.props.fetchRepoFail)
    }

    // Saves the given repo ID in our store
    setDetailViewRepo (repoId) {
        // Prevent another dispatch and re-render if we are already viewing
        // the given ID
        if (this.props.appState.detailViewRepo == null || repoId !== this.props.appState.detailViewRepo.detailRepoId) {
            let detailRepo = {}
            this.props.repos.retrieved.forEach((repo) => {
                if (repo.id === repoId) {
                    detailRepo = repo
                }
            })
            this.props.setDetailViewRepo(detailRepo)
        }
    }

    setResultsPage (pageNumber) {
        this.props.setResultsPage(pageNumber)
    }
}

RepoListContainer.PropTypes = {
    repos: PropTypes.any.isRequired,
    appState: PropTypes.object.isRequired,
    fetchRepoPending: PropTypes.func.isRequired,
    fetchRepoSuccess: PropTypes.func.isRequired,
    fetchRepoFail: PropTypes.func.isRequired,
    resultsPage: PropTypes.number.isRequired,
    setDetailViewRepo: PropTypes.func.isRequired
}

// Makes store data available through props
function mapStateToProps (state) {
    return {
        repos: state.repos,
        appState: state.appState
    }
};

// Allows us to call our action creators from props without the need
// to wrap them in dispatch()
function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        fetchRepoPending: searchActionCreators.fetchRepoPending,
        fetchRepoSuccess: searchActionCreators.fetchRepoSuccess,
        fetchRepoFail: searchActionCreators.fetchRepoFail,
        setDetailViewRepo: detailActionCreators.setDetailViewRepo,
        setResultsPage: searchActionCreators.setResultsPage
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoListContainer)
