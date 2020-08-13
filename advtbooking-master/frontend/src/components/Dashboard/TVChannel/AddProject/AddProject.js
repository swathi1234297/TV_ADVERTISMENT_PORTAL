import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const AddProject = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToAddInfo(data)

        props.history.push('./tvChannelDashboard')
    }
    console.log(errors);

    return (
        <div style={{   backgroundImage: "url(" + "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#919191'  }}>

                    <Card.Body>
                        {props.location.fileNameImage}

                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group controlId="channelName">
                                <Form.Label>Channel Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Channel name" name="channelName" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="managerName">
                                <Form.Label>Manager Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Manager name" name="managerName"  pattern="[a-z]{1,15}" title=" name should contain only alphabets." ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="channelAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" name="channelAddress"  pattern="[a-z]{1,15}" title="Address should contain only alphabets." ref={register({ required: true, maxLength: 400 })} />
                            </Form.Group>

                            <Form.Group controlId="bannerAdvtPrice">
                                <Form.Label>Banner Advertisement Price (per seconds) - Normal Slot </Form.Label>
                                <Form.Control type="number" placeholder="Enter Price in Rupees" name="bannerAdvtPrice" ref={register({ required: true, maxLength: 10 })} />
                            </Form.Group>

                            <Form.Group controlId="videoAdvtPrice">
                                <Form.Label>Video Advertisement Price (per seconds) - Normal SLot</Form.Label>
                                <Form.Control type="number" placeholder="Enter Price in Rupees" name="videoAdvtPrice" ref={register({ required: true, maxLength: 10 })} />
                            </Form.Group>

                            <Form.Group controlId="primeSlotBannerPrice">
                                <Form.Label>Prime Slot Banner Pricing per seconds (6pm - 9pm)</Form.Label>
                                <Form.Control type="number" placeholder="Enter Price in Rupees" name="primeSlotBannerPrice" ref={register({ required: true, maxLength: 10 })} />
                            </Form.Group>

                            <Form.Group controlId="primeSlotVideoPrice">
                                <Form.Label>Prime Slot Video Pricing per seconds (6pm - 9pm)</Form.Label>
                                <Form.Control type="number" placeholder="Enter Price in Rupees" name="primeSlotVideoPrice" ref={register({ required: true, maxLength: 10 })} />
                            </Form.Group>

                            <Form.Group controlId="channelTRP">
                                <Form.Label>Channel TRP</Form.Label>
                                <Form.Control type="number" placeholder="Enter TRP in 1 upto 100" name="channelTRP" ref={register({ required: true, maxLength: 10 })} />
                            </Form.Group>

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

    function callServerToAddInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, "imageName": props.location.fileNameImage }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/addProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while adding Info ', error))

    }

}

export default AddProject
