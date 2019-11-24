import React from 'react';
import PropTypes from 'prop-types';

import TopBarComponent from '../TopBarComponent';
import queryString from 'query-string'

import { Link } from "react-router-dom";

import axios from 'axios';

const propTypes = {
    areaFilter: PropTypes.array,
    styleFilter: PropTypes.array,
    timeFilter: PropTypes.array,
    genderFilter: PropTypes.array,
}

const defaultProps = {
    areaFilter: [
        {name:"모든 지역",key:"0"},
        {name:"서울 강남구‎",key:"1"},
        {name:"서울 강동구‎",key:"2"},
        {name:"서울 강북구‎",key:"3"},
        {name:"서울 강서구‎",key:"4"},
        {name:"서울 관악구‎",key:"5"},
        {name:"서울 광진구‎",key:"6"},
        {name:"서울 구로구‎",key:"7"},
        {name:"서울 금천구‎",key:"8"},
        {name:"서울 노원구‎",key:"9"},
        {name:"서울 도봉구‎",key:"10"},
        {name:"서울 동대문구",key:"11"},
        {name:"서울 동작구‎",key:"12"},
        {name:"서울 마포구‎",key:"13"},
        {name:"서울 서대문구",key:"14"},
        {name:"서울 서초구‎",key:"15"},
        {name:"서울 성동구‎",key:"16"},
        {name:"서울 성북구‎",key:"17"},
        {name:"서울 송파구‎",key:"18"},
        {name:"서울 양천구‎",key:"19"},
        {name:"서울 영등포구",key:"20"},
        {name:"서울 용산구‎",key:"21"},
        {name:"서울 은평구‎",key:"22"},
        {name:"서울 종로구‎",key:"23"},
        {name:"서울 중구‎",key:"24"},
        {name:"서울 중랑구",key:"25"},
    ],
    styleFilter: [
        {name:"모든 영법",key:"all"},
        {name:"자유형",key:"free"},
        {name:"횡영",key:"all"},
        {name:"배형",key:"back"},
        {name:"평형",key:"flat"},
        {name:"개헤엄",key:"all"},
        {name:"접영",key:"all"},
        {name:"선헤엄",key:"all"},
    ],
    timeFilter: [
        {name:"모든 시간대", key:"all"},
        {name:"월", key:"월"},
        {name:"화", key:"화"},
        {name:"수", key:"수"},
        {name:"목", key:"목"},
        {name:"금", key:"금"},
    ],
    genderFilter: [
        {name:"남/여", key:"1"},
        {name:"여성만", key:"0"}
    ]
}

class SearchComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataList: [],
            selectedArea: this.props.areaFilter[0].key,
            selectedStyle: this.props.styleFilter[0].key,
            selectedTime: this.props.timeFilter[0].key,
            selectedGender: this.props.genderFilter[0].key
        }
    }

    componentDidMount() {
        const params = queryString.parse(this.props.location.search);

        this.setState({
            selectedArea: params.selectedArea,
            selectedStyle: params.selectedStyle,
            selectedTime: params.selectedTime,
            selectedGender: params.selectedGender
        })
    }

    requestApi = () => {
        axios.get("http://15.164.94.43:3000/v1/teachers", {
            params: {
                "swim_type": this.state.selectedStyle,
                "gender": this.state.selectedGender,
                // "group_n": 1,
                "lesson_date": this.state.selectedTime
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

    onChangeEvent = (key) => {
        return (event) => {
            var item = event.target.value
            console.log("key : " + key + " value : " + item)
            this.setState({ key: item.key })
        }
    }

    render() {
        const createSelector = (id, items, onChange) => {
            const createOption = (value) => {
                return (
                    <option key={value.name} value={value.key}>{value.name}</option>
                )
            }
            console.log("id : " + id + " state : " + this.state[id])
            return (
                <div className="input-group mb-3">
                    <select className="custom-select" id={id} defaultValue="1" onChange={onChange} value={this.state[id]}>
                        {items.map((item) => { return createOption(item) })}
                    </select>
                </div>
            )
        }
        return (
            <div>
                <TopBarComponent />

                <div className="d-flex" style={{ paddingLeft: "300px", paddingRight: "300px", paddingTop: "30px" }}>
                    <div className="card d-block mr-5" style={{ width: '300px', height: '600px' }}>
                        detail filter

                        <div className="col">{createSelector("selectedArea", this.props.areaFilter, this.onChangeEvent('selectedArea'))}</div>
                        <div className="col">{createSelector("selectedStyle", this.props.styleFilter, this.onChangeEvent('selectedStyle'))}</div>
                        <div className="col">{createSelector("selectedTime", this.props.timeFilter, this.onChangeEvent('selectedTime'))}</div>
                        <div className="col">{createSelector("selectedGender", this.props.genderFilter, this.onChangeEvent('selectedGender'))}</div>
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
