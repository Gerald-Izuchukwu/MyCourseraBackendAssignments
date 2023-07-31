const express = require('express')
const mongoose = require('mongoose')
//Give the url for mongodb databse
const url = process.env.MONGO_URI
const app = express()


mongoose.connect(url,{useNewUrlParser:true})

const connection = mongoose.connection

connection.on('open',()=>{
    console.log(`Connected to database`);
})

app.use(express.json())