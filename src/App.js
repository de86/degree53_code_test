import React from 'react';
import { connect } from 'react-redux';

import RepoListContainer from './containers/RepoListContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RepoListContainer />
      </div>
    );
  }
}

export default App;
