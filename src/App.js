import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    repos: state.repos
  }
}

export default connect(mapStateToProps)(App);
