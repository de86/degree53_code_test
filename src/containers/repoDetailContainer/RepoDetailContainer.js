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

        this.getRepoDetails = this.getRepoDetails.bind(this)
        this.getRepoReadme = this.getRepoReadme.bind(this)
    }

    render () {
        let detailViewContent = null

        if (this.props.repoId != null) {
            const repoDetails = this.getRepoDetails(this.props.repoId)

            detailViewContent =
                <div className={ commonStyles.padding }>
                    <RepoDetails repo={repoDetails} />
                    <div className={ commonStyles.padding }>
                        <button onClick={() => this.getRepoReadme(repoDetails.owner.login, repoDetails.name)}>
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

    // Returns an object containing a repository's details
    // given an ID
    getRepoDetails (id) {
        let repoToView = {}
        this.props.repos.forEach((repo) => {
            if (repo.id === this.props.repoId) {
                repoToView = repo
            }
        })

        return repoToView
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
        repoId: state.appState.detailRepoId,
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
