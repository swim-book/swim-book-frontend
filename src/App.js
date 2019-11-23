import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

import LandingComponent from './landing/LandingComponent';

const propTypes = {
}

const defaultProps = {
}

class App extends React.Component {
  render() {
    return (
      <div>
        <LandingComponent />
      </div>
    );
  }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App;
