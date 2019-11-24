import React from 'react';
import PropTypes from 'prop-types';

import logo from './resource/logo.png';
import topBarImage from './resource/top_bar_background.png';

const propTypes = {
    largeMode: PropTypes.bool
}

const defaultProps = {
    largeMode: false
}

class TopBarComponent extends React.Component {
    render() {
        if (this.props.largeMode) {
            return (
                <div className="h-50 w-100" style={{'position':'absolute'}}>
                    <nav className="navbar navbar-expand-lg navbar-light h-100" style={{ backgroundImage: "url("+topBarImage+")", backgroundSize:'cover', backgroundRepeat:'no-repeat' }}>
                        <div className="h-100">
                        <a className="navbar-brand" href="/" style={{ marginLeft: "350px" }}>
                            <img src={logo} height="30" className="d-inline-block align-top" />
                            <span className="m-2">Swim books</span>
                        </a>
                        </div>
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
        else {
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
}

TopBarComponent.propTypes = propTypes
TopBarComponent.defaultProps = defaultProps

export default TopBarComponent;
