import "./Employee.css"
import React, { useEffect, useState }  from "react";
import { Redirect } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Axios from "axios";
import sidenav_Emp from "./Sidenav_Emp"
import CheckNext from "./doctorAppointment"
import Addreport from "../patient/AddReport"
import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
import logo from "./user.png";
import { Link } from "react-router-dom";
import {Route,Router,Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});




function Emp_doctor (props){


const [loginID, setloginID] = useState('');
const [loginPass, setloginPass] = useState('');
const [loginStatus, setloginStatus] = useState('');

const search = props.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id'); 
const RIdFromURL = params.get('rid'); 



  const login = () => {
    console.log('Login function called');
    console.log('Login function called');
    Axios.post("https://znts-backend.herokuapp.com/posts/loginDoctor", {
      ID: loginID,
      Password: loginPass,
    })
      .then((Response) => {
        
        if(Response == Response.data.msg) {
          setloginStatus(Response.data.msg);
        }
        if(Response.data.msg == "Password matched") {
         window.location.href = `https://znts-frontend.herokuapp.com/doctorAppointment?id=${loginID}`;
        }
        else {
          setloginStatus(Response.data.msg);
        }
      })

  }


return (
  <div className={`back-color`} >
            <Link to="/"><MDBBtn >Home</MDBBtn></Link>
            <Link to="/sidenav_Emp"><MDBBtn >Go Back</MDBBtn></Link>

<MDBContainer className={`card-display`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard className={`card-width`}>
        <MDBCardBody>
      <form>
      <div className={`centered-login`}>
    <img src={logo} alt="User" />
    <p className="h5 text-center mb-4">Sign in as an Doctor here Please.</p>
        <div className="blue-text">
          <MDBInput label="Type your ID" icon="envelope"  onChange={(e) => {setloginID(e.target.value)}} />
          <MDBInput label="Type your password" icon="lock" group type="Password" onChange={(e) => {setloginPass(e.target.value)}} />
        </div>
        <div className="text-center">
          <MDBBtn onClick={login}>Login</MDBBtn>
          <h2 style={{color: 'blue'}}>OR</h2>
          <br />
          <Link to="/AddReport"><MDBBtn >Add Patient Report.</MDBBtn></Link>
        </div>
        </div>
        <h3 style={{color: 'red' , textAlign:'center'}}>{loginStatus}</h3>
        <h3 style={{color: 'red' , textAlign:'center'}}>{IdFromURL}</h3>
        <h3 style={{color: 'Green' , textAlign:'center'}}>{RIdFromURL}</h3>
        
      </form>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>



  

</div>
);
};

export default Emp_doctor;