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
            dataList: []
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
                            <h1>박태환 선생님과 함께하는</h1><br />
                            <h2>수영 강습</h2>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: "300px", paddingRight: "300px", paddingTop: "100px" }}>
                    <div className="position-sticky sticky-top card text-center p-5" style={{ width: "300px" }}>
                        <span className="align-center">
                            <img src="https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2F48%2F2014060911444311.jpg" style={{ borderRadius: "50%", width: "150px" }} />
                            <h3 className="mt-3">박태환 강사</h3>
                            <h6>강남 샹제리제 수영장</h6>
                            <p className="mt-5">"수영의 정석!"</p>
                            <button className="btn btn-primary w-100">바로 신청하기</button>

                        </span>
                    </div>
                    <div className="flex-fill pl-5" style={{ marginLeft: "300px", marginTop: "-460px" }}>
                        <div>
                            <h3>강사 소개</h3>
                            <p className="pt-5">안녕하세요 회원님의 라이프 스타일에 건강한 변화를 드리고 싶습니다.<br /><br />
                                트레이너 박태환입니다.<br /><br />
                                저는 엘리트 체육특기생으로 육상, 복싱, 수영을 전공하고 전역 후 보디빌딩으로 전향하여 5년째 트레이너 생활을 이어오고 있습니다.<br /><br />
                                불편한 부분을 개선할 수 있는 교정 분야에서부터 다이어트, 근력증가, 기초체력 증진까지 회원님의 다양한 목적에 맞는 운동을 도와드리고 있습니다. <br /><br />
                                제가 운동 시 무엇보다 중요하게 생각하는 것은 일상에서의 회원님이 향상 감을 느낄 수 있도록 하는 것입니다. 라이프 스타일 전면에서 좋은 습관을 가질 수 있도록 밀착 코치해드립니다. 생활의 작은 습관부터 정확한 운동까지 일상의 컨디션을 올리고 원하는 몸을 가질 수 있도록 도와드리겠습니다.<br /><br />
                                저 박태환과 함께 운동해보시는 건 어떠세요?</p>
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

<div className="container">
    <div className="row">
		<div className="well">
            <br></br><br></br>
        <h1 className="text-center">Reviews</h1>
        <div className="list-group">

          <a href="#" className="list-group-item">
                <div className="media col-md-3">
                    
                </div>
                  
                <div className="col-md-6">
                    <h4 className="list-group-item-heading"> {this.getStar(3)} List group heading </h4>
                    <p className="list-group-item-text"> Eu eum corpora torquatos, ne postea constituto mea, quo tale lorem facer no. Ut sed odio appetere partiendo, quo meliore salutandi ex. Vix an sanctus vivendo, sed vocibus accumsan petentium ea. 
                        Sed integre saperet at, no nec debet erant, quo dico incorrupte comprehensam ut. Et minimum consulatu ius, an dolores iracundia est, oportere vituperata interpretaris sea an. Sed id error quando indoctum, mel suas saperet at.                         
                    </p>
                </div>
                <div className="col-md-3 text-center">                    
                
                </div>
          </a>
          <a href="#" className="list-group-item">
                <div className="media col-md-3">

                </div>
                <div className="col-md-6">
                    <h4 className="list-group-item-heading"> {this.getStar(3)} List group heading </h4>
                    <p className="list-group-item-text"> Ut mea viris eripuit theophrastus, cu ponderum accusata consequuntur cum. Suas quaestio cotidieque pro ea. Nam nihil persecuti philosophia id, nam quot populo ea. 
                        Falli urbanitas ei pri, eu est enim volumus, mei no volutpat periculis. Est errem iudicabit cu. At usu vocibus officiis, ad ius eros tibique appellantur.                         
                    </p>
                </div>
                <div className="col-md-3 text-center">
                    <div className="stars">
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                    
                </div>
          </a>
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
