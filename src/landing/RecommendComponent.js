import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
}

const defaultProps = {
}

class RecommendComponent extends React.Component {
    render() {
        return (
            <div className="card ml-5" style={{ width: '300px' }} >
                <img src="http://img.hani.co.kr/imgdb/resize/2012/0729/134347251332_20120729.JPG" className="card-img-top" style={{ height: '300px', 'object-fit': 'cover' }} />
                <div className="card-body">
                    <h5 className="card-title">박태환 강사</h5>
                    <div className="mt-3">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
            </div>
        );
    }
}

RecommendComponent.propTypes = propTypes
RecommendComponent.defaultProps = defaultProps

export default RecommendComponent;
