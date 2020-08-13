import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const BrandsDashHeader = (props) => {
    return (
        <div>

            <Navbar bg="primary">
                <Link exact to="/brandsDashboard">  <Navbar.Brand href="#home" style={{ color : '#fff' }}>Advertiser</Navbar.Brand></Link>
                <Nav className="mr-auto" >
                    <Link exact to="/brandsDashboard"><Nav.Link href="#home" style={{ color : '#fff' }}>Home</Nav.Link></Link>
                    <Link to="/brandsDashboard/myProjects"> <Nav.Link href="#features" style={{ color : '#fff' }}>My Projects</Nav.Link></Link>
                    <Link to="/brandsDashboard/uploadBannerFile"> <Nav.Link href="#features" style={{ color : '#fff' }}>Upload Banner Ad</Nav.Link></Link>
                    <Link to="/brandsDashboard/uploadVideoFile"> <Nav.Link href="#features" style={{ color : '#fff' }}>Upload Video Ad</Nav.Link></Link>

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

export default BrandsDashHeader
