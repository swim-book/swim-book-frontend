import React from 'react';
import PropTypes from 'prop-types';

import TopBarComponent from '../TopBarComponent';

const propTypes = {
}

const defaultProps = {
}

class DetailComponent extends React.Component {
    render() {
        return (
            <div>
                <TopBarComponent />
            </div>
        );
    }
}

DetailComponent.propTypes = propTypes
DetailComponent.defaultProps = defaultProps

export default DetailComponent;
