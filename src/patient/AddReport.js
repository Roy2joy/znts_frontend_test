import "../register/register.css"
import React, { useState }  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import {Route,Router,Switch} from "react-router-dom";
import FormPage from "../login/login"
import { MDBContainer, MDBSelect ,MDBRow, MDBCol, MDBCard,MDBCardBody,MDBCardImage,MDBInput, MDBBtn } from 'mdbreact';
import logo from "../register/user.png";
import Select from 'react-select';
import Emp_Doctor from "../Employee/Emp_doctor"
import {createBrowserHistory} from 'history';
import { render } from "@testing-library/react";
import getBackendConnection from "../Connection";
import getFrontendConnection from "./Connection";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});



function Addreport (){


const [pidReg, setpidReg] = useState('');
const [didReg, setdidReg] = useState('');
const [dateReg, setdateReg] = useState('');
const [diagnosisReg, setdiagnosisReg] = useState('');
const [prescriptionReg, setprescription] = useState('');
const [adviceReg, setadvice] = useState('');




  const Register = () => {
    
    Axios.post(getBackendConnection()+"posts/updatePatientHistory", {
        PatID : pidReg,   
       DocID : didReg,
       Date : dateReg, 
       Diagnosis : diagnosisReg,
       Prescription :prescriptionReg,   
       Advice: adviceReg

    })
      .then((Response) => {
        if(Response.data.msg) {
          //setloginStatus(Response.data[0].msg);
          //setloginStatus(Response.data[0].msg);
          var id="Patient Report Updated";

        var rid;

         window.location.href = getFrontendConnection()+`Emp_Doctor?rid=${id}`;
      //return render(<FormPage />);

        }
      })

  }







return (
  <div className={`back-color`} >

<Link to="/"><MDBBtn >Home</MDBBtn></Link>
<Link to=""><MDBBtn >Go Back</MDBBtn></Link>

<MDBContainer className={`card-display`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard className={`card-width`}>
        <MDBCardBody>
      <form>
      <div className={`centered-register`}>
    <img src={logo} alt="User" />
    <p className="h5 text-center mb-4">Add Patient Report</p>
        <div className="blue-text">
          <MDBInput label="Type your Patient ID" icon="users" onChange={(e) => {setpidReg(e.target.value)}} />
          <MDBInput label="Type your ID" icon="lock"  onChange={(e) => {setdidReg(e.target.value)}}/>
          <MDBInput label="Type Date" icon="lock"  onChange={(e) => {setdateReg(e.target.value)}}/>
          <MDBInput label="Type your Diagnosis for Patient" icon="address-book"  onChange={(e) => {setdiagnosisReg(e.target.value)}}/>
          <MDBInput label="Type your Presciption for Patient" icon="phone-volume" onChange={(e) => {setprescription(e.target.value)}}/>
          <MDBInput label="Type Advice for Patient" icon="lock"  onChange={(e) => {setadvice(e.target.value)}}/>
           </div>

        <br />
        <br />
        <div className="text-center">
          <MDBBtn onClick={Register}>Add Report.</MDBBtn>
        </div>
         
        </div>
      </form>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>

  

</div>
);
};




export default Addreport;