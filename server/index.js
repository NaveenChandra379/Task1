const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const DetailsModel = require("./models/details")

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/TaskDatabase");
var personalDetails;
var educationalDetails;
var professionalDetails;
app.post('/personalDetails' , (req,res) => {
    console.log(req.body);
     personalDetails = req.body;
    


})

app.post("/educationDetails" , (req,res) => {
    console.log(req.body);
     educationalDetails = req.body;
    
})

app.post("/professionalDetails" , (req,res) => {
    console.log(req.body);
     professionalDetails = req.body;
    const finalResult = {...personalDetails,...educationalDetails,...professionalDetails};
    console.log(finalResult);
    DetailsModel.create(finalResult)
    .then(details => res.json(details))
    .catch(err => res.json(err))    
    console.log("hello");


})

app.listen(3000, () => {
    console.log("Server is running ")
})