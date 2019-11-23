import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingComponent from './landing/LandingComponent';
import SearchComponent from './search/SearchComponent';

const propTypes = {
}

const defaultProps = {
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={LandingComponent}/>
          <Route path="/search" component={SearchComponent}/>
        </Router>
      </div>
    );
  }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App;
