import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const propTypes = {
    areaFilter: PropTypes.array,
    styleFilter: PropTypes.array,
    timeFilter: PropTypes.array,
    genderFilter: PropTypes.array,
}

const defaultProps = {
    areaFilter: [
        "모든 지역",
        "서울 강남구‎",
        "서울 강동구‎",
        "서울 강북구‎",
        "서울 강서구‎",
        "서울 관악구‎",
        "서울 광진구‎",
        "서울 구로구‎",
        "서울 금천구‎",
        "서울 노원구‎",
        "서울 도봉구‎",
        "서울 동대문구",
        "서울 동작구‎",
        "서울 마포구‎",
        "서울 서대문구",
        "서울 서초구‎",
        "서울 성동구‎",
        "서울 성북구‎",
        "서울 송파구‎",
        "서울 양천구‎",
        "서울 영등포구",
        "서울 용산구‎",
        "서울 은평구‎",
        "서울 종로구‎",
        "서울 중구‎",
        "서울 중랑구",
    ],
    styleFilter: [
        "모든 영법",
        "자유형",
        "횡영",
        "배형",
        "평형",
        "개헤엄",
        "접영",
        "선헤엄"
    ],
    timeFilter: [
        "모든 시간대",
        "새벽",
        "아침",
        "점심",
        "저녁",
        "야간"
    ],
    genderFilter: [
        "남/여",
        "남성만",
        "여성만"
    ]
}

class FilterCompoenent extends React.Component {

    render() {
        const createSelector = (id, items) => {
            const createOption = (value) => {
                return (
                    <option key={value} value={value}>{value}</option>
                )
            }
            return (
                <div className="input-group mb-3">
                    <select className="custom-select" id={id} defaultValue="1">
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
                        <div className="col">{createSelector("areaFilter", this.props.areaFilter)}</div>
                        <div className="col">{createSelector("styleFilter", this.props.styleFilter)}</div>
                    </div>
                    <div className="row">
                        <div className="col">{createSelector("timeFilter", this.props.timeFilter)}</div>
                        <div className="col">{createSelector("genderFilter", this.props.genderFilter)}</div>
                    </div>
                </div>
                <Link to="/search">
                    <button className="btn btn-success btn-block">검색</button>
                </Link>
            </span>
        );
    }
}

FilterCompoenent.propTypes = propTypes
FilterCompoenent.defaultProps = defaultProps

export default FilterCompoenent;
