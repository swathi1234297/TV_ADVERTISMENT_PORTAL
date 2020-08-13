import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import CorpDashHeader from './CommonComponents/TVChannelDashHeader';
import TvChannelDashUI from './TVChannelDashHome/TvChannelDashUI';
import AddProject from './AddProject/AddProject';
import { Route } from "react-router-dom";
import UploadChannelLogo from './AddProject/UploadChannelLogo';
import ShowProjects from './ShowProjects/ShowProjects';
import ModifyProjectModal from './ShowProjects/ModifyProject/ModifyProjectModal';

const CorpDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <CorpDashHeader logout={props.history} />

            <Route exact path="/tvChannelDashboard" component={TvChannelDashUI} />
            <Route exact path="/tvChannelDashboard/addProject" component={AddProject} />
            <Route exact path="/tvChannelDashboard/uploadProjectImage" component={UploadChannelLogo} />

            <Route exact path="/tvChannelDashboard/showProjects" component={ShowProjects} />
            <Route exact path="/tvChannelDashboard/showProjects/modal/modifyProject" component={ModifyProjectModal} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/users/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default CorpDashContainer
