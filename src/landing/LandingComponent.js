import React from 'react';
import PropTypes from 'prop-types';
import { relative } from 'path';

import './LandingComponent.css';
import logo from '../resource/logo.png';

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
                <nav className="navbar navbar-expand-lg navbar-light nav-background">
                    <a className="navbar-brand" href="#" style={{ "margin-left": "350px" }}>
                        <img src={logo} height="30" className="d-inline-block align-top" />
                        <span className="m-2">Swim books</span>
                    </a>
                    <div className="ml-auto"></div>
                    <div className="h-100" style={{ "margin-right": "350px" }}>
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active pl-3 pr-3" href="#">회원가입</a>
                            <a className="nav-item nav-link active pl-3 pr-3" href="#">로그인</a>
                        </div>
                    </div>
                </nav>
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
