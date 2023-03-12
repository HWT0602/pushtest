import { Col, Row } from "antd";

export default function Footer(){
    return(
        <footer className="footer">
          <div className="footer__above">
            <Row type="flex" justify="center" align="middle">
              <Col
                sm={{span:24}}
                lg={{span:12}}
                xl={{span:12}}
                xxl={{span:12}}
              >
                <h5 className="footer__description col-lg-8">
                  臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                </h5>
              </Col>
              <Col
                sm={{span: 24}}
                lg={{span: 12}}
                xl={{span: 12}}
                xxl={{span: 12}}
              >
                <ul className="footer__list">
                  <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-facebook-f"></i></a></li>
                  <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-google-plus-g"></i></a></li>
                  <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </Col>
            </Row>
              
          </div>

    <div className="footer__below">
      <div className="container">
        <h6>
          &copy; Copyright All rights reserved.
        </h6>
      </div>
    </div>
  </footer>
    );
}