import React from 'react';
import PropTypes from 'prop-types';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingComponent from './landing/LandingComponent';
import SearchComponent from './search/SearchComponent';
import DetailComponent from './detail/DetailComponent';

const propTypes = {
}

const defaultProps = {
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Router basename="/swim-book-frontend">
          <Route exact path="/" component={LandingComponent}/>
          <Route path="/search" component={SearchComponent}/>
          <Route path="/detail" component={DetailComponent}/>
        </Router>
      </div>
    );
  }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App;
