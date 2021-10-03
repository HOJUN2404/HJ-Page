import React from "react";
import "../css/Home.css";
import "../css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";


function Home() {
    return (
      <div id="home">
        <Container className="home-container">
          <Row>
            <Col xs={12} sm={12} md={12}>
              <div className="title">
                <div className="font-bold" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                  Hello, I’m
                  <span className="font-color-pink"> HOJUN</span>.
                </div>
                <div className="font-bold" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"><span className="font-color-pink">Go-getter </span> Developer.</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
export default Home;
