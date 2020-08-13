import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const CorpDashHeader = (props) => {
    return (
        <div>
            <Navbar bg="primary">
                <Link exact to="/tvChannelDashboard">  <Navbar.Brand href="#home" style={{ color : '#fff' }}>Advertiser</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/tvChannelDashboard"><Nav.Link href="#home" style={{ color : '#fff' }}>Home</Nav.Link></Link>
                    <Link to="/tvChannelDashboard/uploadProjectImage"> <Nav.Link href="#features" style={{ color : '#fff' }}>Add Advertisement Pricing</Nav.Link></Link>
                    <Link to="/tvChannelDashboard/showProjects"> <Nav.Link href="#features" style={{ color : '#fff' }}>My Projects</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default CorpDashHeader
