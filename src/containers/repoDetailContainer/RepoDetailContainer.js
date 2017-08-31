import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RepoDetails from '../../components/repoDetailsView/repoDetails/RepoDetails'
import RepoDetailsReadme from '../../components/repoDetailsView/repoDetailsReadme/RepoDetailsReadme'

import * as detailActionCreators from '../../actions/detailActionCreators'

import { getReadme } from '../../api/github'

import commonStyles from '../../resources/css/common.css'

class RepoDetailView extends Component {
    constructor (props) {
        super(props)

        this.getRepoReadme = this.getRepoReadme.bind(this)
    }

    render () {
        let detailViewContent = null

        if (this.props.detailViewRepo != null) {
            const repo = this.props.detailViewRepo

            detailViewContent =
                <div className={ commonStyles.padding }>
                    <RepoDetails repo={repo} />
                    <div className={ commonStyles.padding }>
                        <button onClick={() => this.getRepoReadme(repo.owner.login, repo.name)}>
                            View readme
                        </button>
                        { this.props.readmeText ? <RepoDetailsReadme readmeText={this.props.readmeText} /> : null }
                    </div>
                </div>
        } else {
            detailViewContent =
                <div className={ commonStyles.padding }>
                    <h4>Please search for a repository on the left then click on a result to view more details</h4>
                </div>
        }

        return (
            <div>
                { detailViewContent }
            </div>
        )
    }

    getRepoReadme (owner, repoName) {
        getReadme(owner, repoName, this.props.fetchReadmeSuccess, this.props.fetchReadmeFail)
    }
}

RepoDetailView.PropTypes = {
    repos: PropTypes.any.isRequired,
    repoId: PropTypes.any.isRequired,
    readmeText: PropTypes.any.isRequired,
    fetchReadmeSuccess: PropTypes.func.isRequired,
    fetchReadmeFail: PropTypes.func.isRequired

}

function mapStateToProps (state) {
    return {
        repos: state.repos.retrieved,
        detailViewRepo: state.appState.detailViewRepo,
        readmeText: state.appState.readmeText
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        fetchReadmeSuccess: detailActionCreators.fetchReadmeSuccess,
        fetchReadmeFail: detailActionCreators.fetchReadmeFail
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetailView)
