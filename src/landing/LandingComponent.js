import React from 'react';
import PropTypes from 'prop-types';
import { relative } from 'path';

import './LandingComponent.css';

import TopBarComponent from '../TopBarComponent';
import FilterComponent from './FilterCompoenent';
import RecommendComponent from './RecommendComponent';

const propTypes = {
}

const defaultProps = {
}

class LandingComponent extends React.Component {
    render() {
        return (
            <div style={{ height: '100vh' }}>
                <TopBarComponent />
                <div className="container container-fluid h-100">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <FilterComponent />
                        <RecommendComponent />
                    </div>
                </div>
            </div>
        );
    }
}

LandingComponent.propTypes = propTypes
LandingComponent.defaultProps = defaultProps

export default LandingComponent;
