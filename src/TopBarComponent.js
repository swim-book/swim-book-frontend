import React from 'react';
import PropTypes from 'prop-types';

import logo from './resource/logo.png';

const propTypes = {
}

const defaultProps = {
}

class TopBarComponent extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light nav-background">
                    <a className="navbar-brand" href="/" style={{ marginLeft: "350px" }}>
                        <img src={logo} height="30" className="d-inline-block align-top" />
                        <span className="m-2">Swim books</span>
                    </a>
                    <div className="ml-auto"></div>
                    <div className="h-100" style={{ marginRight: "350px" }}>
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active pl-3 pr-3" href="#">회원가입</a>
                            <a className="nav-item nav-link active pl-3 pr-3" href="#">로그인</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

TopBarComponent.propTypes = propTypes
TopBarComponent.defaultProps = defaultProps

export default TopBarComponent;
