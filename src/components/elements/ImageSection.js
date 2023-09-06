import React from "react";
import {Container, Row, Col} from "reactstrap";
import Images from "../../assets/img/images";
import Arrowline from '../elements/Arrowline';
import '../../assets/css/main.css';

const ImageSection = () => {
    return (
        <div className="imagecolsection">
            <Container>
                <Row className="d-flex flex-column d-sm-flex flex-sm-row justify-content-center align-items-center">
                    <Col className="col-lg-6 col-md-12 col-sm-12 text-sm-left hiw-col-style">
                        <div className="w-100 w-sm-75">
                            <h1 className="main-h1">Use Domain Finder to find unique domains!</h1>
                            <p className="fs-6 w-100 main-p mt-5">
                                Millions of people are searching for companies, domains, meta tags, company names and
                                etc., on Domain finder. Try today! <b>1 000 000</b> data for your search.
                            </p>
                        </div>
                        <Arrowline />
                    </Col>
                    <Col className="text-center img-girl">
                        <img className="img" src={Images.ImageGirl} alt="Girl photo" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ImageSection
;
