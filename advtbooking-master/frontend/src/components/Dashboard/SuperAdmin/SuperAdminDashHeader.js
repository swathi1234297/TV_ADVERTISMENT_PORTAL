import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../Home/CommonComponents/Auth'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const SuperAdminDashHeader = (props) => {
    return (
        <div style={{   backgroundImage: "url(" + "https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            
        <div style={{ marginTop: '100px',padding:'100px' }}>

        
                 
            <Row>
            <Button variant="warning"><Link exact to="/superAdminDashboard/getAllUsers" style={{ color: '#fff' }}>Get Users</Link></Button>
            </Row><br />
            <Row>
            <Button variant="warning"><Link exact to="/superAdminDashboard/addUser" style={{ color: '#fff' }}>Add Users</Link></Button> <br /><br />
            </Row><br />
            <Row>
            <Button variant="warning"><Link exact to="/superAdminDashboard/modifyUser" style={{ color: '#fff' }}>Modify Users</Link></Button><br /><br />
            </Row><br />
            <Row>
            <Button variant="warning"><Link exact to="/superAdminDashboard/deleteUser" style={{ color: '#fff' }}>Delete Users</Link></Button><br /><br />
            </Row><br />
            <Row><br />
            <Button variant="warning" onClick={() => { auth.logout(() => { props.logout.push("/"); }); }}>Logout</Button>
            </Row>
            <br /><br />
           
                 
                
          
        </div>
        </div>
    )
}

export default SuperAdminDashHeader
