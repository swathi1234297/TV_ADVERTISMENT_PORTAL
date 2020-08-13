var express = require('express');
var router = express.Router();

// ******** Add New Booking for consumer ******** 

router.post("/addNewBooking", (request, response) => {

    console.log('addNewBooking ', request.body);
    database.collection("orderConfirmationTable").insertOne(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }

        //Code to triiger email start 

        //Email Trigger Set Up instructions : 
        //>> run : cd backend ,
        // next run >> npm install nodemailer
        //Now create a mailtrap acct : https://mailtrap.io/
        //IN your mailtrap dashboard - click on Demo Inbox
        // copy your username & password and paste in below fields "user" , "pass"
        //now go and do the confirm booking . you should see a new mail in your mailtrack inbox
        //Reference : https://stackabuse.com/how-to-send-emails-with-node-js/

        const nodemailer = require('nodemailer');
        let transport = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '1d846f0748490a',
                pass: '33bc978511245d'
            }
        });
        const message = {
            from: 'shwetha@gmail.com', // Sender address
            to: 'swathichethu50@gmail.com',         // List of recipients
            subject: 'thank you for your registration', // Subject line
            text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
        };
        transport.sendMail(message, function (err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log(info);
            }
        });
        //Code to triiger email end

        response.send(result.result);
    });
});


//Upload Project Logo by Admin
var multer = require('multer')
let uploadedBannerName
var storage = multer.diskStorage(
    {
        destination: './backend/uploads/banner/',
        filename: function (req, file, cb) {
            uploadedFileName = Date.now() + '-' + file.originalname
            cb(null, uploadedFileName);
        }
    }
);
var upload = multer({ storage: storage });


router.post('/uploadBanner', upload.single('bannerAdvtFile'), function (request, response) {
    console.log('upload Video controller')

    try {
        console.log('uploadedBannerName ', uploadedBannerName)
        response.send({ 'uploadedBannerName': uploadedBannerName });
    } catch (err) {
        response.send(400);
    }

})


// ******** Fetch User Info using email ******** 
router.get("/getAllProjects", (request, response) => {

    console.log('In getAllProjects')
    database.collection("channelAdvtPricingTable").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});



// ******** Fetch User Info using email ******** 
router.get("/secret", async (request, response) => {

    console.log('In Payment Gateway flow')

    // Set your secret key. Remember to switch to your live secret key in production!
    const stripe = require('stripe')('sk_test_nYjSi7krdwh62XFJqku9JgtY00UNorfMge');

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 2000,
        currency: 'inr',
        metadata: { integration_check: 'accept_a_payment' },
    });

    console.log('paymentIntent.client_secret ', paymentIntent.client_secret)
    response.json({ client_secret: paymentIntent.client_secret });

});
//COde for getMyOrders Page
var ObjectId1 = require('mongodb').ObjectId;
router.post("/getProductInfo", (request, response) => {
    console.log('getProductInfo ', request.body);
    database.collection("channelAdvtPricingTable").find({ _id: new ObjectId1(request.body.productId) }).toArray((error, result) => {
        if (error) {
            console.log(error)
            return response.status(500).send(error);
        }

        console.log(result)
        response.send(result);
    });
});


module.exports = router;

//https://www.thepolyglotdeveloper.com/2018/09/developing-restful-api-nodejs-mongodb-atlas/