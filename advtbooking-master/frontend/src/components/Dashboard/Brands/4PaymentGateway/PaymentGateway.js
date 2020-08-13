import React, { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CardSectionStyles.css'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_fZ61XnBFLKYbzfbh1y1N2noe00oCno2CYX');

const PaymentGateway = () => {
    return (
        <div style={{   backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/thumbnails/000/407/606/small/v363-aew-44-newyearsalebadge.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
        <center>
        <Card style={{ width: '28rem' }}>

        <Card.Body>
        <Card.Title style={{backgroundColor: '#919191',padding:'10px' }}>Payment Gateway
            </Card.Title>
            <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
        <img class="img-fluid cc-img" src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png" style={{backgroundColor: '#919191',padding:'10px' }}></img>

        </Card.Body>
        </Card>
        </center> 
        </div>
    )
}

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentRequest, setPaymentRequest] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        // function callServer() {
        //     const response = fetch('/api/patient/secret')
        //     const { client_secret: clientSecret } = response.json();

        //     console.log('clientSecret ', clientSecret)
        //     // Call stripe.confirmCardPayment() with the client secret.
        // }

        fetch('/api/consumer/secret')
            .then(res => res.json())
            .then(data => {


                (async () => {
                    console.log('data json ', data.client_secret)

                    const result = await stripe.confirmCardPayment(data.client_secret
                        , {
                            payment_method: {
                                card: elements.getElement(CardElement),
                                billing_details: {
                                    name: 'Swathi k s',
                                },
                            }
                        });

                    console.log('before result ', result)


                    if (result.error) {
                        console.log(result.error.message);
                    } else {
                        console.log('result ', result)

                        if (result.paymentIntent.status === 'succeeded') {
                            console.log('successful payment')
                        }
                    }
                })()
            })


    };

    return (
        <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
            <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
            </div>
        </fieldset>
        <Button variant="primary" type="submit" disabled={!stripe}>Pay</Button>
        
    </form >
    );
};

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': { color: '#fce883' },
            '::placeholder': { color: '#87bbfd' },
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee',
        },
    },
};

export default PaymentGateway


