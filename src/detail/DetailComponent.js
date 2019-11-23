import React from 'react';
import PropTypes from 'prop-types';

import TopBarComponent from '../TopBarComponent';

import lesson from '../resource/lesson.mp4'

const propTypes = {
}

const defaultProps = {
}

class DetailComponent extends React.Component {
    render() {
        return (
            <div>
                <TopBarComponent />
                <div className="card p-0">
                    <video autoPlay className="container-fluid p-0" style={{ height: "650px", objectFit: "cover" }}>
                        <source src={lesson}></source>
                    </video>
                    <div className="card-img-overlay" style={{ backgroundColor: "#000000", opacity: "0.3" }}>

                    </div>
                    <div className="card-img-overlay text-white d-flex align-items-center pl-5 ml-5">
                        <div>
                            <h1>박태환 선생님과 함께하는</h1><br />
                            <h2>수영 강습</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DetailComponent.propTypes = propTypes
DetailComponent.defaultProps = defaultProps

export default DetailComponent;
