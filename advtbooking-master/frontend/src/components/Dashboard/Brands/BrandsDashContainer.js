import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import BrandsDashUI from './1DashboardHome/BrandsDashUI';
import BrandsDashHeader from './0CommonComponents/BrandsDashHeader'
import DetailsComponent from './2MoreDetails/DetailsComponent';
import { Route } from "react-router-dom";
import Confirmation from './3Confirmation/Confirmation';
import MyProjects from './MyProjects';
import PaymentGateway from './4PaymentGateway/PaymentGateway';
import UploadBannerFile from './UploadAdvtFiles/UploadBannerFile';
import UploadVideoFile from './UploadAdvtFiles/UploadVideoFile';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const BrandsDash = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <BrandsDashHeader logout={props.history} />
            <Row style={{ 'background-color': 'gold', 'padding': '15px' }}>
                <Col style={{ color : 'red','font-size':'50px'}}>
            <i>Hello {userInDash.name}</i></Col></Row>
            <br /><br /><br /><br />
            <Route exact path="/brandsDashboard" component={BrandsDashUI} />
            <Route exact path="/brandsDashboard/myProjects" component={MyProjects} />

            <Route exact path="/brandsDashboard/moreDetails" component={DetailsComponent} />
            <Route exact path="/brandsDashboard/confirmationPage" component={Confirmation} />
            <Route exact path="/brandsDashboard/paymentsGateway" component={PaymentGateway} />
            <Route exact path="/brandsDashboard/uploadBannerFile" component={UploadBannerFile} />
            <Route exact path="/brandsDashboard/uploadVideoFile" component={UploadVideoFile} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/authenticate/getUserInfo', {
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

export default BrandsDash
