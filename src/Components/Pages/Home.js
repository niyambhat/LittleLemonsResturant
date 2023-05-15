import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import yum from "../../Assets/yum.png"
import Image from 'react-bootstrap/Image';


function Home() {
    return (
        <>
            <section className="bannerSection">
                <Container>
                <Row className='banner'>
                <Col md={6} xs={12}>
                    <div className='flex-alignCenter'>
                    <h1>Little Lemons</h1>
                    <p>We are family owned Mediterrnean resturant, focused on tradional recipies served with a modern twist..</p>
                    <Button className='primary' variant="primary">Reserve a table</Button>
                    </div>      
                </Col>
                <Col md={6} xs={12} className='banner_imgWrapper'>
                    <div className="hero_img text-end">
                    <Image src={yum} alt="restaurant" />
                    </div>
                </Col>
            </Row>
                </Container>  
            </section>
            
            <section>
                <Container>
                <Row className="align-items-center">
                <Col md={6} xs={12}>
                    <h1>This Weeks Specials</h1>
                </Col>
                <Col md={6} xs={12} className="text-end">
                    <Button variant="primary">Online Menu</Button>
                </Col>
            </Row>
            <Row>
                <Col sm={4} xs={12}>
                <img src={yum} alt="restaurant" />
                    <h3>Steak</h3>
                    <p>$24.99</p>
                    <p>Description of the dish goes here...</p>
                    <Button variant="primary">Order a delivery</Button>
                </Col>
                <Col sm={4} xs={12}>
                <img src={yum} alt="restaurant" />
                    <h3>Pizza</h3>
                    <p>$19.99</p>
                    <p>Description of the dish goes here...</p>
                    <Button variant="primary">Order a delivery</Button>
                </Col>
                <Col sm={4} xs={12}>
                <img src={yum} alt="restaurant" />
                    <h3>Salad</h3>
                    <p>$9.99</p>
                    <p>Description of the dish goes here...</p>
                    <Button variant="primary">Order a delivery</Button>
                </Col>
            </Row>
                </Container>
            </section>
            
            </>
    );
}

export default Home;
