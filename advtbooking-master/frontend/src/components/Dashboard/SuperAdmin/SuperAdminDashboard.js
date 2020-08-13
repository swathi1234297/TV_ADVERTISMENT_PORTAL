import React, { useState, useEffect } from 'react'
import SuperAdminDashHeader from './SuperAdminDashHeader';
import GetAllUsers from './GetAllUsers/GetAllUsers';
import { Route } from 'react-router-dom'
import AddUser from './AddUser/AddUser';
import ModifyUser from './ModifyUser/ModifyUser';
import DeleteUser from './DeleteUser/DeleteUser';
import ModifyUserModal from './ModifyUser/ModifyUserModal';
import DeleteUserModal from './DeleteUser/DeleteUserModal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const SuperAdminDashboard = (props) => {

    return (
        <div style={{   backgroundImage: "url(" + "https://images.pexels.com/photos/71116/hurricane-earth-satellite-tracking-71116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <Row style={{ 'background-color': 'gold', 'padding': '15px' }}>
                <Col style={{ color : 'red','font-size':'50px'}}>
        
           <i> Super Admin Dashboard</i></Col></Row>
            <br />
            <SuperAdminDashHeader logout={props.history} />

            <Route exact path="/superAdminDashboard/getAllUsers" component={GetAllUsers} />
            <Route exact path="/superAdminDashboard/addUser" component={AddUser} routeHistory={props.history} />
            <Route exact path="/superAdminDashboard/modifyUser" component={ModifyUser} />
            <Route exact path="/superAdminDashboard/deleteUser" component={DeleteUser} />
            <Route exact path="/superAdminDashboard/modal/modifyUser" component={ModifyUserModal} />
            <Route exact path="/superAdminDashboard/modal/deleteUser" component={DeleteUserModal} />

        </div>
    )

}

export default SuperAdminDashboard
