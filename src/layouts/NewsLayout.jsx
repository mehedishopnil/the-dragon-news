import React from 'react';
import Header from '../pages/Shared/Header/header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RigthNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>

<Container>
   
<Row>

        <Col lg={9}>
            <Outlet></Outlet>
        </Col>

        <Col lg={3}><RightNav></RightNav></Col>
    </Row>
</Container>

<Footer></Footer>
        </div>
    );
};

export default NewsLayout;