import React from "react";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, Row, Col, UncontrolledCarousel, } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faCheck, faUser, faUsers, faCalendarAlt } from "@fortawesome/free-solid-svg-icons"; 
import aa from '../img/imoge1.png';
import its1 from '../img/its1.png';
import its2 from '../img/its2.png';
import its3 from '../img/its3.png';
import its4 from '../img/its4.png';
import its5 from '../img/its5.png';
import its6 from '../img/its6.png';


import A1 from '../img/111.png';
import A2 from '../img/222.png';
import A3 from '../img/333.png';
import A4 from '../img/444.png';
import A5 from '../img/555.png';





const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover : true
};


function Projects() {
  return (
    <><div id="projects" className="padding-top-btm-5e">
        <div>
          <p className="menu-name font-color-pink">PROJECTS</p>
        </div>
        <Container>
          <Row>
            {/* 프로젝트 1번 포트폴리오 */}
            <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
              <div>
                <p className="font-bold-900 font-2">포트폴리오 웹 사이트</p>
                <p className="font-color-lightgray font-bold">
                  React로 SPA를 개발한 포트폴리오 사이트입니다.
                </p>
                <div className="padding-top-btm-1e">
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="icon-size-1e icon-color" />
                    <span className="padding-left-right-1e">개인</span>
                  </p>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="icon-size-1e icon-color" />
                    <span className="padding-left-right-1e">2021.09 - 2021.09 (2주)</span>
                  </p>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCode}
                      className="icon-size-1e icon-color" />
                    <span className="keyword-yellow margin-left-1e margin-right-03e">React</span>
                    <span className="keyword-yellow margin-left-right-03e">CSS</span>
                    <span className="keyword-yellow margin-left-right-03e">Reactstrap</span>
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="icon-size-1e icon-color" />
                    <span className="keyword-gray margin-left-1e margin-right-03e">기획</span>
                    <span className="keyword-gray margin-left-right-03e">디자인</span>
                    <span className="keyword-gray margin-left-right-03e">개발</span>
                  </p>
                </div>
                <div className="padding-top-1e">
                  <a
                    href="http://devseung2.github.io/findseung2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="icon-size-2e icon-color" />
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <Slider {...settings}>
              <div>
                <h3><img src={A1} className="itsphoto" /></h3>  
              </div>
              <div>
                <h3><img src={A2} className="itsphoto" /></h3>  
              </div>
              <div>
                <h3><img src={A3} className="itsphoto" /></h3>  
              </div>
              <div>
                <h3><img src={A4} className="itsphoto" /></h3>  
              </div>
              <div>
                <h3><img src={A5} className="itsphoto" /></h3>  
              </div>
            </Slider>
            </Col>
          </Row>

          <div className="bottom-line"></div>

          {/* 프로젝트 2번 블로그페이지 */}
          <Row>
            <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <Slider {...settings}>
              <div>
                <h3><img src={its1} className="itsphoto" /></h3>
              </div>
              <div>
                <h3><img src={its2} className="itsphoto"/></h3>
              </div>
              <div>
                <h3><img src={its3} className="itsphoto"/></h3>
              </div>
              <div>
                <h3><img src={its4} className="itsphoto"/></h3>
              </div>
              <div>
                <h3><img src={its5} className="itsphoto"/></h3>
              </div>
              <div>
                <h3><img src={its6} className="itsphoto"/></h3>
              </div>
            </Slider>
            </Col>
            <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
              <div>
                <p className="font-bold-900 font-2">카페 예약 사이트</p>
                <p className="font-color-lightgray font-bold">
                  풀스택으로 개발한 카페 자리예약사이트 입니다.
                </p>
                <div className="padding-top-btm-1e">
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="icon-size-1e icon-color" />
                    <span className="padding-left-right-1e">5명</span>
                    <span className="keyword-gray margin-left-right-03e">기여도 <span className="font-red">30</span> %</span>
                  </p>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="icon-size-1e icon-color" />
                    <span className="padding-left-right-1e">2021.08 - 2021.09 (약 2개월)</span>
                  </p>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCode}
                      className="icon-size-1e icon-color" />
                    <span className="keyword-yellow margin-left-1e margin-right-03e">HTML5</span>
                    <span className="keyword-yellow margin-left-right-03e">CSS3</span>
                    <span className="keyword-yellow margin-left-right-03e">Bootstrap</span>
                  </p>
                  <p className="font-bold">
                    <span className="keyword-yellow">JavaScript</span>
                    <span className="keyword-yellow margin-left-right-03e">Java</span>
                    <span className="keyword-yellow margin-left-right-03e">Spring</span>
                    <span className="keyword-yellow margin-left-right-03e">Oracle</span>
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="icon-size-1e icon-color" />
                    <span className="keyword-gray margin-left-1e margin-right-03e">기획</span>
                    <span className="keyword-gray margin-left-right-03e">디자인</span>
                    <span className="keyword-gray margin-left-right-03e">개발</span>
                  </p>
                </div>
                <div className="padding-top-1e">
                  <a
                    href="https://diligent-lung-980.notion.site/8142a2783507410cb71fb938e0749bd1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="icon-size-2e icon-color" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </div></>
  );
}

export default Projects;