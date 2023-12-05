import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import PersonalDetails from "./personalDetails";
import EducationalDetails from "./educationDetails";
import ProfessionalDetails  from "./professionalDetails";
import End from "./end";

import {BrowserRouter , Routes ,   Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<PersonalDetails />}></Route>
        <Route path = '/educationDetails' element = {<EducationalDetails />}></Route>
        <Route path = '/professionalDetails' element = {<ProfessionalDetails />}></Route>
        <Route path = '/End' element = {<End />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
