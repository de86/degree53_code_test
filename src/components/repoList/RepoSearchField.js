import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './RepoSearchField.css';

class RepoSearchField extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Search Repositories</h2>
                <form onSubmit={this.handleClick}>
                    <input
                        type="text"
                        name="repo-search"
                        ref={(input) => {this.input = input}} />
                    <input type="submit" value="Search"></input>
                </form>
            </div>
        )
    }

    handleClick(event) {
        event.preventDefault();
        this.props.searchRepos(this.input.value)
    }
}

RepoSearchField.PropTypes = {
    searchRepos: PropTypes.func.isRequired
}

export default RepoSearchField;