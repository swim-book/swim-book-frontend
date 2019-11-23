import React from 'react';
import PropTypes from 'prop-types';

import TopBarComponent from '../TopBarComponent';
import queryString from 'query-string'

import { Link } from "react-router-dom";

import axios from 'axios';

const propTypes = {
}

const defaultProps = {
}

class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const params = queryString.parse(this.props.location.search);

        const selectedArea = params.selectedArea;
        const selectedStyle = params.selectedStyle;
        const selectedTime = params.selectedTime;
        const selectedGender = params.selectedGender;
        
        axios.get("https://jsonplaceholder.typicode.com/todos/1", {
            params: {}
        }).then((res) => {
            console.log("res : "  + JSON.stringify(res.data));
        })

    }

    getContent = () => {
        var list = []
        for (var i = 0; i < 100; i++) {
            list.push("dd");
        }

        return list.map((item) => {
            return (
                <div key={item} className="card mb-3">
                    <Link to="/detail">
                        <div className="row no-gutters">
                            <div className="">
                                <img src="http://img.hani.co.kr/imgdb/resize/2012/0729/134347251332_20120729.JPG" className="card-img-top" style={{ width: '200px', height: '300px', 'object-fit': 'cover' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">박태환 강사</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <TopBarComponent />

                <div className="d-flex" style={{ "padding-left": "300px", "padding-right": "300px", "padding-top": "30px" }}>
                    <div className="card d-block mr-5" style={{ width: '300px', height: '600px' }}>
                        detail filter
                    </div>
                    <div className="flex-fill">
                        <div className="d-flex justify-content-end mb-3">
                            <span>
                                <select class="custom-select" id="sort">
                                    <option value="0">평점순</option>
                                    <option value="1">리뷰순</option>
                                    <option value="2">가격순</option>
                                </select>
                            </span>
                        </div>
                        <div>
                            {this.getContent()}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

SearchComponent.propTypes = propTypes
SearchComponent.defaultProps = defaultProps

export default SearchComponent;
