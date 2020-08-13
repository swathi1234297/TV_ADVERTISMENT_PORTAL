import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

const BookingCard = (props) => {

    const [userDataWhoBooked, setUserDataWhoBooked] = useState({})

    useEffect(() => {
        fetchUserInfoFromServer()
    }, [])

    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#fff' }}>
                <Card.Body>
                    <Card.Title className="bg-primary" style={{ height: '30px', color: '#fff' }}>{userDataWhoBooked ? userDataWhoBooked.name:""}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"  >{props.bookingData.consumerEmail}</Card.Subtitle>
                    <Card.Text style={{ color: '#ad0000', fontWeight: "bold" }}>
                        Booked by above person @ ₹ {props.bookingData.finalPrice}
                    </Card.Text>
                    <Card.Footer style={{backgroundColor: '#919191',color: '#fff' }}>  {props.bookingData.langSelected} |
                        {props.bookingData.slotTypeSelected} |
                        {props.bookingData.advtTypeSelected}</Card.Footer>


                </Card.Body>
            </Card>
        </div>
    )

    function fetchUserInfoFromServer() {

        console.log('In fetchBookingsFromServer ')

        //reuse the same login api to get userdata
        fetch('/api/authenticate/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': props.bookingData.consumerEmail })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved ', data)
                console.log('data retrieved1 ', data[0])
                setUserDataWhoBooked(data[0])

            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default BookingCard
