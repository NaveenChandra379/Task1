import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios' ;

function EducationDetails()  {

    const [schoolName,setSchoolName] = useState() 
    const [schoolGrade , setSchoolGrade] = useState()
    const [SchoolyearOfPassing , setSchoolYear] = useState()
    const [CollegeName , setCollegeName] = useState()
    const [CollegeGrade , setCollegeGrade] = useState()
    const [CollegeyearOfPassing , setCollegeYear] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/educationDetails',{schoolName,schoolGrade,SchoolyearOfPassing,CollegeName,CollegeGrade,CollegeyearOfPassing})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }

    return(
        <div className = "d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className = "bg-white p-3 rounded w-25">
                <h2> Education Details</h2>
                
                
                <form onSubmit={handleSubmit}>
                <h3>School</h3>
                    <div className = "mb-3">
                        <label htmlFor="SchoolName">
                            <strong>School Name : </strong>
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type = "text"
                        placeholder = "Enter School Name"
                        name = "SchoolName"
                        className = "EducationDetails-form rounded-0"
                        onChange={(e) => setSchoolName(e.target.value)}
                        />

                    </div>
                    <div className = "mb-3">
                        <label htmlFor = "SchoolGrade">
                            <strong>School Grade : </strong>
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type = "text"
                        placeholder="Enter school grade"
                        name = "schoolGrade"
                        className="EducationDetails-form rounded-0"
                        onChange={(e) => setSchoolGrade(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor = "SchoolYearOfPassing">
                        <strong>
                           Year Of Passing :
                        </strong>
                        </label>
                        &nbsp;
                        <input 
                        type = "text"
                        placeholder="Year of passing"
                        name = "SchoolyearOfPassing"
                        className="EducationDetails-form rounded-0"
                        onChange={(e) => setSchoolYear(e.target.value)}
                        />

                    </div>
                    <h3>College</h3>
                    <div className = "mb-3">
                        <label htmlFor="CollegeName">
                            <strong>College Name : </strong>
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type = "text"
                        placeholder = "Enter College Name"
                        name = "Collegename"
                        className = "EducationDetails-form rounded-0"
                        onChange={(e) => setCollegeName(e.target.value)}
                        />

                    </div>
                    <div className = "mb-3">
                        <label htmlFor = "CollegeGrade">
                            <strong>College Grade : </strong>
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type = "text"
                        placeholder="Enter College grade"
                        name = "CollegeGrade"
                        className="EducationDetails-form rounded-0"
                        onChange={(e) => setCollegeGrade(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor = "CollegeYearOfPassing">
                        <strong>
                           Year Of Passing :
                        </strong>
                        </label>
                        &nbsp;
                        <input 
                        type = "text"
                        placeholder="Year of passing"
                        name = "CollegeyearOfPassing"
                        className="EducationDetails-form rounded-0"
                        onChange={(e) => setCollegeYear(e.target.value)}
                        />

                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                    submit
                    </button>
                    
                    </form>
                    <br></br>
                    <Link to = "/professionalDetails" className ="btn btn-success w-100 rounded-0">
                        Next
                    </Link>
                
            </div>
        </div> 
    )

}

export default EducationDetails;
