import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';

const propTypes = {
}

const defaultProps = {
}

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App;
