import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/header';
import Footer from '../pages/Shared/Footer/Footer';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RigthNav/RightNav';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
               
            <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>

                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;