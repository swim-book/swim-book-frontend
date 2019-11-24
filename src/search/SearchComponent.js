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

        this.state = {
            dataList: []
        }
    }

    componentDidMount() {
        const params = queryString.parse(this.props.location.search);

        const selectedArea = params.selectedArea;
        const selectedStyle = params.selectedStyle;
        const selectedTime = params.selectedTime;
        const selectedGender = params.selectedGender;

        axios.get("http://15.164.94.43:3000/v1/teachers", {
            params: {
                "swim_type": selectedStyle,
                "gender": selectedGender,
                // "group_n": 1,
                "lesson_date": selectedTime
            }
        }).then((res) => {
            console.log("res : " + JSON.stringify(res.data));
            this.setState({ dataList: res.data });
        })

    }

    getStar = (score) => {
        return (
            <div className="mt-3">
            <span className={`fa fa-star ${score >=1 ? "checked" : ""}`}></span>
            <span className={`fa fa-star ${score >=2 ? "checked" : ""}`}></span>
            <span className={`fa fa-star ${score >=3 ? "checked" : ""}`}></span>
            <span className={`fa fa-star ${score >=4 ? "checked" : ""}`}></span>
            <span className={`fa fa-star ${score >=5 ? "checked" : ""}`}></span>
        </div>                                  
        )
    }

    getContent = () => {
        return this.state.dataList.map((item) => {
            return (
                <div key={item.TeacherID} className="card mb-3">
                    <Link to={`/detail?teacherId=${item.TeacherID}`}>
                        <div className="row no-gutters">
                            <div className="">
                                <img src={item.Profile} className="card-img-top" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.Name}</h5> 
                                    {this.getStar(item.AverageScore)}
                                     <p className="card-text">지역 : {item.Local01} {item.Local02} {item.Local03}</p>
                                     <p className="card-text">금액 : {item.Price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').substr(0,6)}원</p>
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

                <div className="d-flex" style={{ paddingLeft: "300px", paddingRight: "300px", paddingTop: "30px" }}>
                    <div className="card d-block mr-5" style={{ width: '300px', height: '600px' }}>
                        detail filter
                    </div>
                    <div className="flex-fill">
                        <div className="d-flex justify-content-end mb-3">
                            <span>
                                <select className="custom-select" id="sort">
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
