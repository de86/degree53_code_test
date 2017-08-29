import React from 'react'

import RepoListContainer from './containers/repoListContainer/RepoListContainer'
import RepoDetailContainer from './containers/repoDetailContainer/RepoDetailContainer'

class App extends React.Component {
    render () {
        return (
            <div className="App container-fluid" >
                <div className="row">
                    <div className="col-md-4">
                        <RepoListContainer />
                    </div>
                    <div className="col-md-8">
                        <RepoDetailContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
