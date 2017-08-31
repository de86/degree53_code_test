import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PageControls from './PageControls'
import RepoListItem from './RepoListItem'

import styles from './RepoList.css'

class RepoList extends Component {
    constructor (props) {
        super(props)

        this.renderRepoItem = this.renderRepoItem.bind(this)
    }

    render () {
        const appState = this.props.appState
        const retrievedRepos = this.props.repos.retrieved

        if (appState.fetchingRepos) {
            return <img src={require('../../resources/images/loading.gif')} />
        } else if (appState.fetched) {
            return (
                <div>
                    <ul className={styles.repoList}>
                        { Object.keys(retrievedRepos).map(this.renderRepoItem) }
                    </ul>
                    <PageControls
                        numberOfRepos={this.props.repos.retrieved.length}
                        page={this.props.repos.resultsPage}
                        repoToSearch={this.props.repos.repoToSearch}
                        searchRepos={this.props.searchRepos}
                        setResultsPage={this.props.setResultsPage} />
                </div>
            )
        } else if (appState.error != null) {
            return <h2>Oops, something went wrong. Try searching again!</h2>
        } else {
            return null
        }
    }

    renderRepoItem (key) {
        const repo = this.props.repos.retrieved[key]

        let active = false
        if (this.props.appState.detailViewRepo != null) {
            active = this.props.appState.detailViewRepo.id === repo.id
        }

        return (
            <RepoListItem
                key={repo.id}
                id={repo.id}
                isActive={active}
                name={repo.name}
                getRepoReadme={this.props.getRepoReadme}
                setDetailViewRepo={this.props.setDetailViewRepo}/>
        )
    }
}

RepoList.PropTypes = {
    appState: PropTypes.object.isRequired,
    repos: PropTypes.object.isRequired,
    getRepoReadme: PropTypes.func.isRequired,
    setDetailViewRepo: PropTypes.func.isRequired,
    searchRepos: PropTypes.func.isRequired,
    setResultsPage: PropTypes.func.isRequired
}

export default RepoList
