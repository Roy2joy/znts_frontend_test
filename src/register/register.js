import "./register.css"
import React, { useState }  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import {Route,Router,Switch} from "react-router-dom";
import FormPage from "../login/login"
import { MDBContainer, MDBSelect ,MDBRow, MDBCol, MDBCard,MDBCardBody,MDBCardImage,MDBInput, MDBBtn } from 'mdbreact';
import logo from "./user.png";
import Select from 'react-select';
import {createBrowserHistory} from 'history';
import { render } from "@testing-library/react";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});



function RegisterPage (){


const [nameReg, setnameReg] = useState('');
const [ageReg, setageReg] = useState('');
const [addressReg, setaddressReg] = useState('');
const [contactReg, setcontactReg] = useState('');
const [cnicReg, setcnicReg] = useState('');
const [passwordReg, setpasswordReg] = useState('');
//const [confirmpassReg,setconfirmpassReg] = useState('');
const [genderReg,setgenderReg] = useState('');
const [regStatus, setregStatus] = useState('');

const options = [
  { value: 'M', label: 'Male' },
  { value: 'F', label: 'Female' }
];



  const Register = () => {
    console.log('Registration function called');
    Axios.post("https://znts-backend.herokuapp.com/posts/makeRegisteration", {
      Name : nameReg,   
       Age : ageReg,
       Gender : genderReg, 
       Address : addressReg,
       ContactNumber : contactReg,   
       Password : passwordReg,
       CNIC : cnicReg

    })
      .then((Response) => {
        if(Response.data.msg == "already registered with this CNIC") {
          //setloginStatus(Response.data[0].msg);
          setregStatus(Response.data.msg);
         
        }
        else {
          //setloginStatus(Response.data[0].msg);
          var id=Response.data.msg;

          //console.log(id);

          window.location.href = `https://znts-frontend.herokuapp.com/login?id=${id}`;
      //return render(<FormPage />);

        }
      })

  }







return (
  <div className={`back-color`} >

<Link to="/"><MDBBtn >Home</MDBBtn></Link>
<Link to="/login"><MDBBtn >Go Back</MDBBtn></Link>

<MDBContainer className={`card-display`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard className={`card-width`}>
        <MDBCardBody>
      <form>
      <div className={`centered-register`}>
    <img src={logo} alt="User" />
    <p className="h5 text-center mb-4">Register yourself Please</p>
        <div className="blue-text">
          <MDBInput label="Type your Name" icon="users" onChange={(e) => {setnameReg(e.target.value)}} />
          <MDBInput label="Type your Age" icon="lock"  onChange={(e) => {setageReg(e.target.value)}}/>
          <MDBInput label="Type your Gender M or F" icon="lock"  onChange={(e) => {setgenderReg(e.target.value)}}/>
          <MDBInput label="Type your Address" icon="address-book"  onChange={(e) => {setaddressReg(e.target.value)}}/>
          <MDBInput label="Type your Contact Number" icon="phone-volume" onChange={(e) => {setcontactReg(e.target.value)}}/>
          <MDBInput label="Type your CNIC" icon="lock" onChange={(e) => {setcnicReg(e.target.value)}}/>
          <MDBInput label="Type your Passowrd" icon="lock" group type="Password" onChange={(e) => {setpasswordReg(e.target.value)}}/>
           </div>

           <h5 style={{color: 'red' , textAlign:'center'}}>{regStatus}</h5>

        <br />
        <br />
        <div className="text-center">
          <MDBBtn onClick={Register}>Register</MDBBtn>
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




export default RegisterPage;