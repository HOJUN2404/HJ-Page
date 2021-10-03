import React from "react";
import "../App.css";
import "../css/About.css";
import "../css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import aa from "../img/1.jpg";
import imoge from "../img/imoge1.png";
import meme from "../img/meme.png";

const About = () => {
 return (
  
    <div id="about" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-pink">ABOUT</p>
      </div>
      <Fade up>
      <Container>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center">
        <Row >
          {/* keywords */}     
          <Col xs={12} sm={4} md={4} className="padding-top-btm-1e">     
            <p className="font-bold-700 font-1H padding-top-1e">
              긍정
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              항상 긍정적으로 생각합니다.
            </p>
          </Col>        
          <Col xs={12} sm={4} md={4} className="padding-top-btm-1e">      
            <p className="font-bold-700 font-1H padding-top-1e">
              열정
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              사소한 일이라도 최선을 다해 노력합니다.
            </p>
          </Col>          
          <Col xs={12} sm={4} md={4} className="padding-top-btm-1e">   
            <p className="font-bold-700 font-1H padding-top-1e">
              {/* <span className="keyword-yellow">협력</span> */}
              협력
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              서로 협력하며 일하는 것을 좋아합니다.
            </p>
          </Col>
        </Row>

        <Row>
        <Col xs={12} sm={12} md={12} className="padding-top-btm-1e">
          <p className="font-bold-700 font-1H padding-top-1e">
            "안녕하세요👋 생각하는 개발자 김호준입니다."
          </p>
          <p className="font-color-lightgray padding-btm-1e">
            Think Positive! 항상 긍정의 힘을 믿으며 앞으로 나아갑니다. 협업을 위해 배려하며, 성장하기 위해 노력합니다.
          </p>
          <p className="font-color-lightgray padding-btm-1e">
            'It ain't over till it is over' 끝까지 최선을 다하기 위해 항상 되새기고 또 되새기는 문장입니다.
          </p>
          <p className="font-color-lightgray padding-btm-1e">
            다양한 시각으로 문제를 바라보고 해결하기 위해 개발 뿐만 아닌 다양한 역량도 중요하게 생각해 끊임없이 발전하려 노력합니다.
          </p>
        </Col>
        </Row>
      </div> 
  
        {/* profile */}
        
        <Row>
          <Col xs={12} sm={6} md={6}>
            <div className="padding-top-2e">
              <p className="font-bold-900 font-1H font-color-bl">
                PROFILE
              </p>
            </div>
            <img src={meme} key='3' alt="프로필 사진" id="profile-img11" className="meme" data-aos="zoom-in" />
            <div>
              <p className="font-bold-700 font-1H font-color-lightgray">
                <span className="padding-left-right-05e"></span>
              </p>
            </div>
            <div className="padding-top-btm-1e">
              <span className="padding-left-right-1e">
                <a
                  href="https://blog.naver.com/dev_seung2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 
                </a>
              </span>
              <span className="padding-left-right-1e">
                <a
                  href="https://github.com/devseung2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 
                </a>
              </span>
            </div>
          </Col>
          {/* education, career */}
          <Col xs={12} sm={6} md={6}>
            <div className="padding-top-btm-2e">
              <div>
                <p className="font-bold-900 font-1H font-color-bl">EDUCATION</p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700">
                  
                  <span className="padding-left-right-1e">전북대학교 경영학과</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                 
                  <span className="padding-left-right-1e">2015.03 - 2021.02</span>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold-900 font-1H font-color-bl">ICIA 교육 수료</p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700">
                  
                  <span className="padding-left-right-1e">오픈 데이터셋을 활용한 서버 기반의 빅데이터 시각화 전문가 양성과정</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  
                  <span className="padding-left-right-1e">2021.05 - 2021.10 (5개월)</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  
                  <span className="keyword-yellow margin-left-1e margin-right-03e">HTML</span> 
                  <span className="keyword-yellow margin-left-right-03e">CSS</span> 
                  <span className="keyword-yellow margin-left-right-03e">JAVA</span> 
                  <span className="keyword-yellow margin-left-right-03e">Bootstrap</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <span className="keyword-yellow">JavaScript(jQuery)</span> 
                  <span className="keyword-yellow margin-left-right-03e">JSP</span> 
                  <span className="keyword-yellow margin-left-right-03e">ORACLE</span>
                </p>
              </div>
              <div className="bottom-line-small"></div>
              <div>
               
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </Fade>
    </div>
  );
}

export default About;