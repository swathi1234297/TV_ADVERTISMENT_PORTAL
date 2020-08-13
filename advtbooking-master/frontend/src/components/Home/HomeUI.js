import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

class HomeUI extends Component {
    render() {
        return (
            <Jumbotron style={{   backgroundImage: "url(" + "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' }}>
                <Container>
                    <Row>
                    <Col>
                            <br /><br /><br /><br /><br /><br />
                            <h1 style={{ color:'gold',fontWeight : 'bold'}}>TV Advertisment Portal</h1>
                            <p style={{ color:'black',fontWeight : 'bold'}}>Upload vedio and Banner ads in our TV channels and Brands have option to make payment through online</p>
                            <p><Button variant="primary" href='/login'>Sign In</Button></p>
                    </Col>
                    <Col> 
                    <img src="https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                     style={{ height:'500px' }}/>
                    </Col>
                    
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;
