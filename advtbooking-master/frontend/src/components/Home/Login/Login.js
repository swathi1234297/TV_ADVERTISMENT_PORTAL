import React from 'react'
import { useForm } from 'react-hook-form';
import auth from '../CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Login = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('signup data ', data);
        loginUserAtServer(data)

    }
    console.log(errors);

    return (
        <div style={{   backgroundImage: "url(" + "https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
             <Row>
             <Col>
                <img class="img-fluid cc-img" src="https://www.pulsesolutions.com/wp-content/uploads/2019/07/img_mob_dev.png"></img>
                </Col>
             <Col>
             <br />
                <Card style={{ width: '23rem', backgroundColor: 'lightgreen' }}>   <br />
                <center>
                    <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png" style={{ width: '5rem', }} />
                    </center>
                    <Card.Body>

                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="formBasicEmail" >
                                <Form.Label >Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: { value: /^\S+@\S+$/i, message: "invalid email address" } })} />
                                {errors.email && errors.email.message}
                                <Form.Text className="text-muted">
                                    Please enter your registered email id
                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" title="Enter valid Password" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>
                            <Button variant="primary" type="submit" >

                                
                                Submit
            </Button>
           
                   
                    <div className="d-flex justify-content-center">
                      <a href="/reset">Forgot your password?</a>
                    </div>
                        </Form>

                    </Card.Body>
                </Card>
               
                </Col>
      
               
                </Row>
            
        </div>
    )

    function loginUserAtServer(requestObject) {

        auth.userEmail = requestObject.email;
        let responseObj

        console.log('email entered ', requestObject.email)
        fetch('/api/authenticate/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    props.history.push("/");
                }
                console.log(data[0].role)
                responseObj = data[0];
                if ('brandOwner' === data[0].role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/brandsDashboard");
                } else if ('channelOwner' === data[0].role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/tvChannelDashboard");
                } else if ('superadmin' === data[0].role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/superAdminDashboard");
                } else {
                    props.routeHistory.push("/");
                }
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default Login
