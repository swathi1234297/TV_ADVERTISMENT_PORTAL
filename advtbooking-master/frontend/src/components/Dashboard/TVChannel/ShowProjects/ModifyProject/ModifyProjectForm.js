import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModifyProjectForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToUpdateInfo(data)

        props.handleClose()
    }
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="channelName">
                <Form.Label>Channel Name</Form.Label>
                <Form.Control type="text" defaultValue={props.projectData.channelName} placeholder="Enter Channel name" name="channelName" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="managerName">
                <Form.Label>Manager Name</Form.Label>
                <Form.Control type="text" defaultValue={props.projectData.managerName} placeholder="Enter Manager name" name="managerName" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="channelAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" defaultValue={props.projectData.channelAddress} placeholder="Address" name="channelAddress" ref={register({ required: true, maxLength: 400 })} />
            </Form.Group>

            <Form.Group controlId="bannerAdvtPrice">
                <Form.Label>Banner Advertisement Price (per seconds) - Normal Slot </Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.bannerAdvtPrice} placeholder="Enter Price in Rupees" name="bannerAdvtPrice" ref={register({ required: true, maxLength: 10 })} />
            </Form.Group>

            <Form.Group controlId="videoAdvtPrice">
                <Form.Label>Video Advertisement Price (per seconds) - Normal SLot</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.videoAdvtPrice} placeholder="Enter Price in Rupees" name="videoAdvtPrice" ref={register({ required: true, maxLength: 10 })} />
            </Form.Group>

            <Form.Group controlId="primeSlotBannerPrice">
                <Form.Label>Prime Slot Banner Pricing per seconds (6pm - 9pm)</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.primeSlotBannerPrice} placeholder="Enter Price in Rupees" name="primeSlotBannerPrice" ref={register({ required: true, maxLength: 10 })} />
            </Form.Group>

            <Form.Group controlId="primeSlotVideoPrice">
                <Form.Label>Prime Slot Video Pricing per seconds (6pm - 9pm)</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.primeSlotVideoPrice} placeholder="Enter Price in Rupees" name="primeSlotVideoPrice" ref={register({ required: true, maxLength: 10 })} />
            </Form.Group>

            <Form.Group controlId="channelTRP">
                <Form.Label>Channel TRP</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.channelTRP} placeholder="Enter TRP in 1 upto 100" name="channelTRP" ref={register({ required: true, maxLength: 10 })} />
            </Form.Group>

            <br /> <br /> <br />
            <Button variant="primary" type="submit">
                Submit
         </Button>
        </Form>
    )

    function callServerToUpdateInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, 'imageName': props.projectData.imageName }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/modifyProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while modify project Info ', error))

    }

}

export default ModifyProjectForm
