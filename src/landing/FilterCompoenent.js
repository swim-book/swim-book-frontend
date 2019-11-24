import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from "react-router-dom";

import { geolocated } from "react-geolocated";

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

class FilterCompoenent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            "redirect": false,
            selectedArea: this.props.areaFilter[0].key,
            selectedStyle: this.props.styleFilter[0].key,
            selectedTime: this.props.timeFilter[0].key,
            selectedGender: this.props.genderFilter[0].key,
        }
    }

    onChangeEvent = (key) => {
        return (event) => {
            var item = event.target.value
            console.log("key : " + key + " value : " + item)
            var newState = {}
            newState[key] = item
            console.log("object : " + JSON.stringify(newState))
            this.setState(newState)
        }
    }

    onSearchClick = () => {
        this.setState({ "redirect": true })
    }

    render() {
        if (this.state.redirect) {
            console.log("state : " + JSON.stringify(this.state));
            return (
                <Redirect to={`./search?selectedArea=${this.state.selectedArea}&selectedStyle=${this.state.selectedStyle}&selectedTime=${this.state.selectedTime}&selectedGender=${this.state.selectedGender}`}>

                </Redirect>
            )
        }

        const createSelector = (id, items, onChange, selectedValue=null) => {
            const createOption = (value) => {
                return (
                    <option key={value.name} value={value.key}>{value.name}</option>
                )
            }
            return (
                <div className="input-group mb-3">
                    <select className="custom-select" id={id} onChange={onChange} value={selectedValue}>
                        {items.map((item) => { return createOption(item) })}
                    </select>
                </div>
            )
        }
        return (
            <span className="p-2 m-2">
                <h2 className="font-weight-bold">딱! 맞는 수영강사를<br />
                    1초안에 소개시켜드립니다.</h2>
                <div className="pt-4">
                    <div className="row">
                        <div className="col">{createSelector("areaFilter", this.props.areaFilter, this.onChangeEvent('selectedArea'), this.props.isGeolocationEnabled ? "1":null)}</div>
                        <div className="col">{createSelector("styleFilter", this.props.styleFilter, this.onChangeEvent('selectedStyle'))}</div>
                    </div>
                    <div className="row">
                        <div className="col">{createSelector("timeFilter", this.props.timeFilter, this.onChangeEvent('selectedTime'))}</div>
                        <div className="col">{createSelector("genderFilter", this.props.genderFilter, this.onChangeEvent('selectedGender'))}</div>
                    </div>
                </div>
                <button className="btn btn-success btn-block" onClick={this.onSearchClick}>검색</button>
            </span>
        );
    }
}

FilterCompoenent.propTypes = propTypes
FilterCompoenent.defaultProps = defaultProps

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(FilterCompoenent);