import React from 'react';
import PropTypes from 'prop-types';

import logo from '../resource/logo.png'

import Carousel from 'react-bootstrap/Carousel';

import axios from 'axios';

const propTypes = {
}

const defaultProps = {
}

class RecommendComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dataList: []
        }
    }

    componentDidMount() {
        this.requestApi();
    }

    requestApi = () => {
        axios.get("http://15.164.94.43:3000/v1/teachers", {
            params: {
                "swim_type": "all",
                "gender": "1",
                // "group_n": 1,
                "lesson_date": "all"
            }
        }).then((res) => {
            console.log("res : " + JSON.stringify(res.data));
            this.setState({ dataList: res.data });
        })
    }

    getStar = (score) => {
        return (
            <div className="mt-3">
                <span className={`fa fa-star ${score >= 1 ? "checked" : ""}`}></span>
                <span className={`fa fa-star ${score >= 2 ? "checked" : ""}`}></span>
                <span className={`fa fa-star ${score >= 3 ? "checked" : ""}`}></span>
                <span className={`fa fa-star ${score >= 4 ? "checked" : ""}`}></span>
                <span className={`fa fa-star ${score >= 5 ? "checked" : ""}`}></span>
            </div>
        )
    }

    createItem = (item) => {

        return (
            <Carousel.Item>
                <h5 className="text-center">이번주 인기강사</h5>

                <img
                    className="d-block w-100"
                    src={item.Profile}
                    height="300px"
                    style={{ objectFit: 'cover', borderRadius: "50%", backgroundColor: "#ffffff" }}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 stylfe={{ color: "black" }}>{item.Name}</h3>
                    <span>
                        {this.getStar(item.AverageScore)}
                </span>
                </Carousel.Caption>
            </Carousel.Item>
        )
    }

    render() {
        return (
            <div className="ml-5" style={{ width: '300px' }} >
                <Carousel style={{ background: 'transparent' }} interval={1000}>
                    {this.state.dataList.map((item) => this.createItem(item))}
                </Carousel>
            </div>
        );
    }
}

RecommendComponent.propTypes = propTypes
RecommendComponent.defaultProps = defaultProps

export default RecommendComponent;
