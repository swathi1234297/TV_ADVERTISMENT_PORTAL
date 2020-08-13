import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (
        <footer >
            <Row style={{ 'background-color': '#0D66C0', 'padding': '25px' }}>
                <Col style={{ color : '#fff' }}>
                    <h3>Advertiser</h3>
                </Col>
                <Col style={{ color : '#fff' }}>
                    <h4>Useful Links</h4>
                    <ul><li><a href="/" style={{ color : '#fff' }}>Home</a></li>
                        <li><a href="/about" style={{ color : '#fff' }}>About us</a></li>
                    </ul>
                </Col>
                <Col style={{ color : '#fff' }}>
                    <h4>Contact Us</h4>
                    <p>Swathi K S<br></br>
                        MCA Final Year<br></br>
                        NMAMIT , Nitte<br></br>
                        <strong>Phone:</strong> +91 966 321 0021<br></br>
                        <strong>Email:</strong> swathirai50@gmail.com<br></br>
                    </p>
                </Col>
            </Row>
        </footer >
    )
}

export default Footer
