import React, { Component } from 'react';

class RepoSearchField extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <label htmlFor="repo-search" className="">
                    Search Repo's:
                    <input
                        type="text"
                        name="repo-search"
                        ref={(input) => {this.input = input}} />
                    <input type="submit" value="Search"></input>
                </label>
            </form>
        )
    }

    handleClick(event) {
        event.preventDefault();
        this.props.searchRepos(this.input.value)
    }
}

export default RepoSearchField;