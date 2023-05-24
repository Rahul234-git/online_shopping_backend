import express from 'express';
import { config } from 'dotenv';
import paymentRouter from './Router/paytmRoutes.js';
import cors from 'cors';

config({path:'./config/config.env'});

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/api', paymentRouter);

app.get('/api/getkey',(req,res) => res.status(200).json({key: process.env.RAZORPAY_API_KEY}))













// const express = require('express');
// const bodyparser = require('body-parser');
// const mongoose = require('mongoose');
// const router = require('./Router/routes');
// const cors = require('cors');

// const port = 4901;

// const app = express();

// app.use(bodyparser.json());
// app.use(cors());
// app.use((req,res,next) => {
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Methods","GET,POST");
//     res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization");
//     next();
// })
// app.use('/api',router);

// mongoose.set("strictQuery",true);

// mongoose.connect(
//     "mongodb://127.0.0.1:27017/staffManagement"
// ).then(result => {
//     console.log("Connected");
//     app.listen(port,() => {
//         console.log(`Server is running on ${port}`)
//     })
// }).catch(error => {
//     console.log(error);
// });