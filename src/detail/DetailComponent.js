import React from 'react';
import PropTypes from 'prop-types';

import TopBarComponent from '../TopBarComponent';
import queryString from 'query-string'
import axios from 'axios';
import lesson from '../resource/lesson.mp4'

const propTypes = {
}

const defaultProps = {
}

class DetailComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            profile: "",
            score:0,
            lessonInfo:"",
            reviewList: []
        }
    }
    componentDidMount() {
        const params = queryString.parse(this.props.location.search);

        const teacherid = params.teacherId;
        axios.get("http://15.164.94.43:3000/v1/teachers", {
            params: {
                "swim_type": "all",
                "lesson_date": "all",
                "teacher_id": teacherid
            }
        }).then((res) => {
            var data = res.data[0];
            console.log("res : " + JSON.stringify(data));
            var scoreList = data.Score.split(',');
            var commentList = data.Comment.split(',');
            var userList = data.UserName.split(',');
            var reviewList = [];
            for (var i = 0; i < scoreList.length; i++) {
                reviewList.push({
                    "userName": userList[i],
                    "score": scoreList[i],
                    "comment": commentList[i]
                })
            }
            this.setState(
                {
                    name: data.Name,
                    profile: data.Profile,
                    score: data.AverageScore,
                    lessonInfo: data.LessonInfo,
                    reviewList: reviewList
                }
            );
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
    getReview = (review) => {
        return (
            <a href="#" className="list-group-item">
                <div className="media col-md-3">

                </div>

                <div className="col-md-6">
                    <h4 className="list-group-item-heading"> {this.getStar(review.score)} {review.userName} </h4>
                    <p className="list-group-item-text"> {review.comment} </p>
                </div>
                <div className="col-md-3 text-center">

                </div>
            </a>
        )
    }
    render() {
        return (
            <div>
                <TopBarComponent />
                <div className="card p-0">
                    <video autoPlay loop className="container-fluid p-0" style={{ height: "650px", objectFit: "cover" }}>
                        <source src={lesson}></source>
                    </video>
                    <div className="card-img-overlay" style={{ backgroundColor: "#000000", opacity: "0.3" }}>

                    </div>
                    <div className="card-img-overlay text-white d-flex align-items-center pl-5 ml-5">
                        <div>
                            <h1>{this.state.name} 선생님과 함께하는</h1><br />
                            <h2>수영 강습</h2>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: "300px", paddingRight: "300px", paddingTop: "100px" }}>
                    <div className="position-sticky sticky-top card text-center p-5" style={{ width: "300px" }}>
                        <span className="align-center">
                            <img src={this.state.profile} style={{ borderRadius: "50%", width: "150px" }} />
                            <h3 className="mt-3">{this.state.name} 강사</h3>
                            <h6>강남 샹제리제 수영장</h6>
                            <p className="mt-5">"수영의 정석!"</p>
                            <button className="btn btn-primary w-100">바로 신청하기</button>

                        </span>
                    </div>
                    <div className="flex-fill pl-5" style={{ marginLeft: "300px", marginTop: "-460px" }}>
                        <div>
                            <h3>강사 소개</h3>
                            <p className="pt-5">{this.state.lessonInfo}</p>
                        </div>
                        <div className="pt-5">
                            <h3>강의 스케쥴</h3>
                            <ul className="pt-5">
                                <li>새벽수영 06:00 ~ 07:00</li>
                                <li>점심수영 12:00 ~ 13:00</li>
                                <li>야간수영 19:00 ~ 20:00</li>
                            </ul>
                        </div>
                        <div className="pt-5">
                            <h3>자격 및 경력</h3>
                            <ul className="pt-5">
                                <li>2019.04 ~
    인천광역시체육회</li>
                                <li>
                                    2016
                                    제31회 리우데자네이루 올림픽 남자 수영 국가대표
    </li>
                                <li>
                                    2014
                                    제17회 인천 아시안게임 남자 수영 국가대표
    </li>
                                <li>
                                    2013.05
                                    해군 홍보대사
    </li>
                                <li>
                                    2013.03
                                    인천광역시청
    </li>
                                <li>
                                    2012
                                    제30회 런던 올림픽 남자 수영 국가대표
    </li>
                                <li>
                                    2011.08
                                    제13회 대구세계육상선수권대회 홍보대사
    </li>
                                <li>
                                    2011
                                    제14회 FINA 세계수영선수권대회 국가대표
    </li>
                                <li>
                                    2010
                                    제16회 광저우 아시안게임 남자 수영 국가대표
    </li>
                                <li>
                                    2010.04
                                    서울학생 7560+ 운동 홍보대사
    </li>
                                <li>
                                    2009.06
                                    경기국제보트쇼 및 코리아매치컵 세계요트대회 홍보대사
    </li>
                                <li>
                                    2009.04
                                    낙농자조금관리위원회 우유홍보대사
    </li>
                                <li>
                                    2009.03
                                    2020 부산 하계올림픽 유치 홍보대사
    </li>
                                <li>
                                    2009.03
                                    2014 인천아시안게임 홍보대사
    </li>
                                <li>
                                    2008
                                    제29회 베이징 올림픽 남자 수영 국가대표
    </li>
                                <li>
                                    2007.09
                                    국정홍보처 다이내믹 코리아 홍보대사
    </li>
                                <li>
                                    2007.07
                                    대한항공 명예홍보대사
    </li>
                                <li>
                                    2006
                                    제15회 도하 아시안게임 남자 수영 국가대표
    </li>
                                <li>
                                    2004
    제28회 아테네 올림픽 남자 수영 국가대표</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container w-100">
                    <div className="row">
                        <div className="well w-100">
                            <br></br><br></br>
                            <h1 className="d-inline">수강생 후기</h1>
                            <span className="ml-3">평균<div className="fa fa-star checked ml-2" />{this.state.score}점</span>
                            <div className="list-group mt-5 mb-5">
                                {this.state.reviewList.map((review) => this.getReview(review))}
                            </div>
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
