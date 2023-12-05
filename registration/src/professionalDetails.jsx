import { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfessionalDetails() {

    const [projectName,setProjectName] = useState()
    const [projectUrl,setProjectUrl] = useState()
    const [CompanyName,setCompanyName] = useState()
    const [Designation,setDesignation] = useState()
    

    const handleSubmit = (e) => {
        
        e.preventDefault()
        axios.post('http://localhost:3000/professionalDetails',{projectName,projectUrl,CompanyName,Designation})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }

    return (
        <div className = "d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className = "bg-white p-3 rounded w-25">
                <h2> Personal Details</h2>
                <form onSubmit={handleSubmit}>
                <h3>projects</h3>
                    <div className = "mb-3">
                        <label htmlFor="ProjectName">
                            <strong>Project Name : </strong>
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type = "text"
                        placeholder = "Enter Project Name"
                        name = "projectName"
                        className = "professionalDetails-form rounded-0"
                        onChange={(e) => setProjectName(e.target.value)}
                        />

                    </div>
                    <div className = "mb-3">
                        <label htmlfor = "projectUrl">
                            <strong>projectUrl : </strong>
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type = "text"
                        placeholder="Enter prject url"
                        name = "projectUrl"
                        className="professionalDetails-form rounded-0"
                        onChange={(e) => setProjectUrl(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlfor = "Project Description">
                        <strong>
                            Project Description :
                        </strong>
                        </label>
                        {/* <br></br> */}
                        &nbsp;
                        
                        <br></br>
                        <textarea 
                        name = "projectDescription" 
                        rows = "2" 
                        cols = "17"
                        >

                        </textarea>

                    </div>
                    <h3>Experience</h3>
                    <div className="mb-3">
                    <label htmlfor = "CompanyName">
                        <strong> Company Name : </strong>
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input 
                    type = "text"
                    placeholder="Enter address"
                    name = "address"
                    className = "professionalDetails-form rounded-0"
                    onChange={(e) => setCompanyName(e.target.value)}
                    />

                    </div>
                    <div className="mb-3">
                    <label htmlfor = "Designation">
                        <strong> Designation : </strong>
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input 
                    type = "text"
                    placeholder="Enter Designation"
                    name = "designation"
                    className = "professionalDetails-form rounded-0"
                    onChange={(e) => setDesignation(e.target.value)}
                    />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="startDate">
                            <strong>startDate :</strong>
                        </label>
                        <input  
                        type ="date"
                        name = "startDate"
                        className = "professionalDetails-form rounded-0"
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="endDate">
                            <strong>endDate :</strong>
                        </label>
                        <input  
                        type ="date"
                        name = "endDate"
                        className = "professionalDetails-form rounded-0"
                        />
                        
                    </div>
                    <button type = "submit" className ="btn btn-success w-100 rounded-0">
                        submit
                    </button>
                    </form>
                    <br></br>
                    <Link to ="/End" className ="btn btn-success w-100 rounded-0">
                        Next
                    </Link>
                    
                    </div>
                    </div>
                    
    )
}

export default ProfessionalDetails;