import React, { Component } from 'react';

class RepoSearchField extends Component {
    render() {
        return (
            <label htmlFor="repo-search" className="">
                Search Repo's:
                <input
                    type="text"
                    name="repo-search"
                    ref={(input) => {this.input = input}} />
                <button onClick={() => this.props.searchRepos(this.input.value)}>Search</button>
            </label>
        )
    }
}

export default RepoSearchField;