const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app=express();

dotenv.config({path: './config.env'});

const DB=process.env.DATABASE;

const middleware = (req,res,next)=>{
    console.log("Successful login");
    next();
}

app.get('/',(req,res) => {
    res.send("Hi this is home");
});

app.get('/about',middleware,(req,res) => {
    res.send("Hi this is about");
});

app.get('/contact',(req,res) => {
    res.send("Hi this is contact");
});