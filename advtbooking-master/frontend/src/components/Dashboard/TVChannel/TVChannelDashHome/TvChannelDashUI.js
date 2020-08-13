import React, { useState, useEffect } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import auth from '../../../Home/CommonComponents/Auth';
import BookingCard from './BookingCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TvChannelDashUI = () => {

    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetchBookingsFromServer()

    }, [])

    return (
        <div style={{   backgroundImage: "url(" + "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <Row style={{ 'background-color': 'gold', 'padding': '15px' }}>
                <Col style={{ color : 'red','font-size':'50px'}}>
           <i> Tvchannel Dashboard</i></Col></Row>


            <CardDeck style={{ margin: 30 }}>
                {booking.map(bookingData =>
                    <BookingCard key={bookingData._id} bookingData={bookingData} />
                )}
            </CardDeck>
        </div>
    )

    function fetchBookingsFromServer() {

        console.log('In fetchBookingsFromServer ')
        fetch('/api/admin/getMyBookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'adminEmail': auth.userEmail })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved ', data)
                setBooking(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default TvChannelDashUI
