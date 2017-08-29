import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RepoSearchField extends Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    render () {
        return (
            <div>
                <h2>Search Repositories</h2>
                <form onSubmit={ this.handleClick }>
                    <input
                        type="text"
                        name="repo-search"
                        ref={(input) => { this.input = input }} />
                    <input type="submit" value="Search"></input>
                </form>
            </div>
        )
    }

    handleClick (event) {
        event.preventDefault()

        // Pass a page value of 1 to reset our resultPage value
        this.props.searchRepos(this.input.value, 1)
    }
}

RepoSearchField.PropTypes = {
    searchRepos: PropTypes.func.isRequired
}

export default RepoSearchField
