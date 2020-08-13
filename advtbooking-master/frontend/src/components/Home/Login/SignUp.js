import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const SignUp = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('signup data ', data);
        updateSignupInfoInServer(data)

    }
    console.log(errors);

    return (
        <div style={{   backgroundImage: "url(" + "https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <center>
                <Card style={{ width: '38rem', backgroundColor: 'lightgreen' }}>   <br />
                    <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png" style={{ width: '5rem', }} />
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="formBasicSignupFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" name="name"  pattern="[a-z]{1,15}" title="Advertiser name should contain only alphabets."ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>
                            <Form.Group controlId="formBasicSignupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: { value: /^\S+@\S+$/i, message: "invalid email address" } })} />
                            </Form.Group>
                            {errors.email && errors.email.message}
                            <Form.Group controlId="formBasicSignupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Password must contain: Minimum 8 characters atleast 1 Alphabet and 1 Number" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>
                            <select name="role" ref={register({ required: true })}>
                                <option value="brandOwner">Brands</option>
                                <option value="channelOwner">Tvchannel</option>
                                <option value="superadmin">SuperAdmin</option>
                            </select>
                            <br /> <br /> <br />
                            <Button variant="primary" type="submit">
                                Submit
              </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )


    function updateSignupInfoInServer(requestObject) {

        auth.userEmail = requestObject.email;

        console.log('email entered ', requestObject.email)
        fetch('/api/authenticate/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {

                if ('brandOwner' === requestObject.role) {
                    auth.authenticated = true;
                    console.log('in patient flow signup')
                    props.routeHistory.push("/brandsDashboard");
                } else if ('channelOwner' === requestObject.role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/tvChannelDashboard");
                } else if ('superadmin' === requestObject.role) {
                    auth.authenticated = true;
                    props.routeHistory.push("/superAdminDashboard");
                }
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }

}

export default SignUp
