import React from 'react';
import PropTypes from 'prop-types';

import TopBarComponent from '../TopBarComponent';
import queryString from 'query-string'
import axios from 'axios';
import lesson from '../resource/lesson.mp4'
import lesson2 from '../resource/lesson2.mp4'
import schedule from '../resource/schedule.png'

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
            score: 0,
            lessonInfo: "",
            teacherId: "",
            career: "",
            timeTable: "",
            price:0,
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
                    teacherId: teacherid,
                    name: data.Name,
                    profile: data.Profile,
                    price: data.Price,
                    score: data.AverageScore,
                    lessonInfo: data.LessonInfo,
                    career: data.Career,
                    lessonDate: data.LessonDate,
                    lessonTime: data.LessonTime,
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
    newLineSupport = (text) => {
        return text.split('<br>').map((item, i) => {
            return <p key={i}>{item}</p>;
        })
    };
    render() {
        return (
            <div>
                <TopBarComponent />
                <div className="card p-0">
                    <video autoPlay loop className="container-fluid p-0" style={{ height: "650px", objectFit: "cover" }}>
                        <source src={
                            this.state.teacherId == 2 ? lesson : lesson2
                        }></source>
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
                            <h5 style={{marginTop:"20px"}}>{this.state.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').substr(0,6)}원 </h5>                
                            <button className="btn btn-primary w-100">바로 신청하기</button>

                        </span>
                    </div>
                    <div className="flex-fill pl-5" style={{ marginLeft: "300px", marginTop: "-460px" }}>
                        <div>
                            <h3>강사 소개</h3>
                            <p className="pt-5">{this.newLineSupport(this.state.lessonInfo)}</p>
                        </div>
                        <div className="pt-5">
                            <h3>강의 스케쥴</h3>
                            <br></br>
                            <img src={schedule} style={{ width: "600px" }}></img>
                            <ul className="pt-5">
                                <li>요일 : {this.state.lessonDate}</li>
                                <li>시간 : {this.state.lessonTime}</li>
                            </ul>
                        </div>
                        <div className="pt-5">
                            <h3>자격 및 경력</h3>
                            {this.newLineSupport(this.state.career)}
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
            </div >

        );
    }
}

DetailComponent.propTypes = propTypes
DetailComponent.defaultProps = defaultProps

export default DetailComponent;
