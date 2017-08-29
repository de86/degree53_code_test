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
        this.setRepoIdToView = this.setRepoIdToView.bind(this)
    }

    render () {
        return (
            <div className={commonStyles.padding}>
                <RepoSearchField searchRepos={this.searchRepos}/>
                <RepoList
                    appState={this.props.appState}
                    repos={this.props.repos}
                    setRepoIdToView={this.setRepoIdToView} />
            </div>
        )
    }

    // Puts the app into a pending state while retreiving repos from
    // github. saves repos in our store if succesfull else saves the error
    searchRepos (searchString) {
        this.props.fetchRepoPending(searchString)
        getRepos(searchString, this.props.fetchRepoSuccess, this.props.fetchRepoFail)
    }

    // Saves the given repo ID in our store
    setRepoIdToView (id) {
        // Prevent another dispatch and re-render if we are already viewing
        // the given ID
        if (id !== this.props.appState.detailRepoId) {
            this.props.setDetailViewId(id)
        }
    }
}

RepoListContainer.PropTypes = {
    repos: PropTypes.any.isRequired,
    appState: PropTypes.object.isRequired,
    fetchRepoPending: PropTypes.func.isRequired,
    fetchRepoSuccess: PropTypes.func.isRequired,
    fetchRepoFail: PropTypes.func.isRequired,
    setDetailViewId: PropTypes.func.isRequired
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
        setDetailViewId: detailActionCreators.setDetailViewId
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoListContainer)
