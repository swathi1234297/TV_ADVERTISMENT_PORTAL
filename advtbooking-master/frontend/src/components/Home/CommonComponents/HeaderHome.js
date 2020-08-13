import React from 'react'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const HeaderHome = () => {
    return (
        <div>
            <Navbar bg="primary">
                <Link exact to="/">  <Navbar.Brand href="#home"  style={{ color : '#fff' }}>Advertiser</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/"><Nav.Link href="#home"  style={{ color : '#fff' }}>Home</Nav.Link></Link>
                    <Link to="/about"> <Nav.Link href="#features"  style={{ color : '#fff' }}>About</Nav.Link></Link>
                    <Link to="/login"><Nav.Link href="#pricing"  style={{ color : '#fff' }}>Login</Nav.Link></Link><br />
                </Nav>
            </Navbar>
        </div>
    )
}

export default HeaderHome
