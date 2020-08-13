import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';

const DetailsComponent = (props) => {

    const [bookingInfo, setBookingInfo] = useState({})
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('form data selected ', data);
        calculatePrice(data)
    }
    console.log(errors);


    return (

        <div style={{ fontWeight: "bold" }}>
            <center>
                <Row>
                 
                    <Col>
                        <Card style={{ width: '68rem',marginLeft:'300px', border: '#fff'}}>
                            <br />

                            {bookingInfo.language}

                            {bookingInfo.finalPrice}

                            {bookingInfo.slotType}
                            <Card.Body>
                                <Card.Text>
                                    <br />
                                    <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.channelName}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>Channel TRP @ {props.location.projectData.channelTRP}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>Manager Name : {props.location.projectData.managerName}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>Address: {props.location.projectData.channelAddress}</Row>

                                    <br />
                                    <Form onSubmit={handleSubmit(onSubmit)} style={{ width: '25rem',marginLeft:'-700px'}}>

                                        <Form.Group as={Col} controlId="langSelected">
                                            <Form.Label>Language</Form.Label>
                                            <Form.Control as="select" name="langSelected" ref={register({ required: true })}>
                                                <option>Kannada</option>
                                                <option>English</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="langSelected">
                                            <Form.Label>Slot Type</Form.Label>
                                            <Form.Control as="select" name="slotTypeSelected" ref={register({ required: true })}>
                                                <option>Normal</option>
                                                <option>Prime</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="advtTypeSelected">
                                            <Form.Label>Slot Type</Form.Label>
                                            <Form.Control as="select" name="advtTypeSelected" ref={register({ required: true })}>
                                                <option>Banner Ad</option>
                                                <option>Video Ad</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <h1>Total Price :    {bookingInfo.finalPrice} </h1>
                                        <Button variant="primary" type="submit">
                                            Calculate Price
                                         </Button>
                                    </Form>
                                    <br />
                                    <Row>
        
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', border: '#fff',marginLeft:'-1100px' }}>
                            <br />
                            <center>
                                <Col>
                                    <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '400px', width: '500px' }} />
                                
                                  
                                  <Link to={{
                                     pathname: '/brandsDashboard/confirmationPage',
                                     projectData: props.location.projectData,
                                     bookingInfo: bookingInfo

                                 }}>
                                     &nbsp;  &nbsp;  &nbsp; <Button variant="success">Check Out</Button></Link>
                              </Col>
                            </center>
                        </Card>
                    </Col>
                </Row>
            </center>
        </div>
    )

    function calculatePrice(data) {

        let finalPrice = 0
        console.log('kannada', data)

        if ('Prime' === data.slotTypeSelected) {

            if ('Video Ad' === data.advtTypeSelected) {

                finalPrice = props.location.projectData.primeSlotVideoPrice
            }

            if ('Banner Ad' === data.advtTypeSelected) {
                finalPrice = props.location.projectData.primeSlotBannerPrice
            }

        } else if ('Normal' === data.slotTypeSelected) {
            console.log('kannada normal')

            if ('Video Ad' === data.advtTypeSelected) {
                finalPrice = props.location.projectData.videoAdvtPrice

            }

            if ('Banner Ad' === data.advtTypeSelected) {
                console.log('kannada normal bannerad')
                finalPrice = props.location.projectData.bannerAdvtPrice
            }

        }
        console.log('finalPrice ', finalPrice)

        setBookingInfo({ "langSelected": data.langSelected, "slotTypeSelected": data.slotTypeSelected, "advtTypeSelected": data.advtTypeSelected, "finalPrice": finalPrice })

    }
}

export default DetailsComponent
