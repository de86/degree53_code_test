import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
        const active = this.props.appState.detailRepoId === repo.id

        return (
            <RepoListItem
                key={repo.id}
                id={repo.id}
                isActive={active}
                name={repo.name}
                getRepoReadme={this.props.getRepoReadme}
                setRepoIdToView={this.props.setRepoIdToView}/>
        )
    }
}

RepoList.PropTypes = {
    appState: PropTypes.object.isRequired,
    repos: PropTypes.object.isRequired,
    getRepoReadme: PropTypes.func.isRequired,
    setRepoIdToView: PropTypes.func.isRequired
}

export default RepoList
