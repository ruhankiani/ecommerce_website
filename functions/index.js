const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//API

// - APP config
const app = express();

// - Middlewares
app.use(cors({origin : true}));
app.use(express.json());

// - APi routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payment/create', async (request, response) => {
    const  total = request.query.total;
    console.log('Payment request received boom for this AMOUNT >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: 'usd',
    });
    //201 means ok
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)





// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
