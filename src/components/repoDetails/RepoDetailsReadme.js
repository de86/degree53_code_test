import React, { Component } from 'react'

class RepoDetailsReadme extends Component {
    render(){
        return (
            <div>
                <h3>Readme:</h3>
                <p>{this.props.readmeText}</p>
            </div>
        )
    }
}

export default RepoDetailsReadme;