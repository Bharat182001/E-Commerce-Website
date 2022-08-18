const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")('sk_test_51JyWUeSCRZD3PReJojY92yY6cShXjlGSzzfyRCgTa296zCbxUlCoswW2fW6gU9wXEV8xZlbBzBk5kmxJFtvrnPge001cT7zBrw');

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin:true }));
app.use(express.json());

// - API Routes
app.get('/', (req, res) => {
    res.status(200).send('hello world');
})

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('payment received: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency
        currency: 'usd'
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/my-e4355/us-central1/api