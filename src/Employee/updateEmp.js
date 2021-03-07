import "./Employee.css"
import React, { useState }  from "react";
import { Redirect } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Axios from "axios";
import sidenav_Emp from "./Sidenav_Emp"
import DepartPage from "../finddoc"
import Emp_admin from "./Emp_admin"
import EmpPage from "./EmpData"
import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
import logo from "./user.png";
import { Link } from "react-router-dom";
import {Route,Router,Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});




function UpdateEmp (props){


const [loginID, setloginID] = useState('');
const [loginPass, setloginPass] = useState('');
const [loginStatus, setloginStatus] = useState('');

const search = props.location.search; // returns the URL query String
const params = new URLSearchParams(search); 
const IdFromURL = params.get('id'); 


  const login = () => {
    console.log('Login function called');
    Axios.post("http://localhost:3001/posts/loginAdmin", {
      ID: loginID,
      Password: loginPass,
    })
      .then((Response) => {
        
        if(Response == Response.data.msg) {
          setloginStatus(Response.data.msg);
        }
        if(Response.data.msg == "Password matched") {
        // window.location.href = "http://localhost:3000/DepartInfo";

        window.location.href = `http://localhost:3000/EmpPage?id=${loginID}`
      }
        else {
          setloginStatus(Response.data.msg);
        }
      })

  }



return (
  <div className={`back-color`} >
            <Link to="/"><MDBBtn >Home</MDBBtn></Link>
            <Link to="/Emp_admin"><MDBBtn >Go Back</MDBBtn></Link>
            <br />
            <h2 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Update Employee</h2>

<MDBContainer className={`card-display`}>
  <MDBRow md="4">
    <MDBCol >
    <MDBCard className={`card-width`}>
        <MDBCardBody>
      <form>
    <p className="h5 text-center mb-4">Enter Employe ID.</p>
        <div className="blue-text">
          <MDBInput label="Type your ID" icon="envelope"  onChange={(e) => {setloginID(e.target.value)}} />
        </div>
        <div className="text-center">
          <MDBBtn href = {`http://localhost:3000/EmpData?id=${loginID}`}>Submit</MDBBtn>
        </div>
        <h3 style={{color: 'red' , textAlign:'center'}}>{loginStatus}</h3>
        <h3 style={{color: 'Green' , textAlign:'center'}}>{IdFromURL}</h3>
      </form>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>



  

</div>
);
};

export default UpdateEmp;