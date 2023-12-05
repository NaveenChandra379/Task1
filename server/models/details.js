const mongoose = require('mongoose')

const DetailsSchema = new mongoose.Schema({
    name : String ,
    email : String ,
    phoneNo : String ,
    address : String ,
    schoolName : String ,
    schoolGrade : String ,
    SchoolyearOfPassing : String ,
    CollegeName : String ,
    CollegeGrade : String ,
    CollegeyearOfPassing : String ,
    projectName : String ,
    projectUrl : String ,
    CompanyName : String ,
    Designation : String
    
})

const DetailsModel = mongoose.model("details", DetailsSchema)
module.exports = DetailsModel