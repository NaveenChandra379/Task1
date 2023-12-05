import { useState } from "react" ;
import { Link } from 'react-router-dom';
import axios from 'axios' ;

function PersonalDetails() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [phoneNo,setPhoneNumber] = useState()
    const [address,setAddress] = useState()

    const handleSubmit = (e) => {
        
        e.preventDefault()
        axios.post('http://localhost:3000/personalDetails',{name,email,phoneNo,address})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }

    return (
        <div className = "d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className = "bg-white p-3 rounded w-25">
                <h2> Personal Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className = "mb-3">
                        <label htmlFor="Name">
                            <strong>Name : </strong>
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type = "text"
                        placeholder = "Enter Name"
                        name = "name"
                        className = "personalDetails-form rounded-0"
                        onChange={(e) => setName(e.target.value)}
                        />

                    </div>
                    <div className = "mb-3">
                        <label htmlFor = "email">
                            <strong>Email : </strong>
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type = "email"
                        placeholder="Enter email"
                        name = "email"
                        className="personalDetails-form rounded-0"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor = "phoneNumber">
                        <strong>
                            Phone No :
                        </strong>
                        </label>
                        &nbsp;
                        <input 
                        type = "text"
                        placeholder="Enter Phone No"
                        name = "phoneNo"
                        className="personalDetails-form rounded-0"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        />

                    </div>
                    <div className="mb-3">
                    <label htmlFor = "Address">
                        <strong> Address : </strong>
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input 
                    type = "text"
                    placeholder="Enter address"
                    name = "address"
                    className = "personalDetails-form rounded-0"
                    onChange={(e) => setAddress(e.target.value)}
                    />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                    submit
                    </button>
                    
                    </form>
                    <br></br>
                    <Link to = "/educationDetails" className ="btn btn-success w-100 rounded-0">
                        Next
                    </Link>
                
            </div>
        </div> 
    )
}

export default PersonalDetails;