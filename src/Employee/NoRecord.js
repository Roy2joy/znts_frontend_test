import "./Employee.css"
import React, { useState,useEffect }  from "react";
import { Redirect } from 'react-router';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Axios from "axios";
import Emp_doctor from "./Emp_doctor"
import { MDBContainer, MDBRow, MDBCol, MDBCard,MDBCardBody,MDBInput, MDBBtn } from 'mdbreact';
import logo from "./user.png";
import { Link } from "react-router-dom";
import {Route,Router,Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});






function Norecord (props){


  return (
    <div style={{backgroundColor:"skyblue" ,height:"100%",width:"100%"}}>  
     <Link to="/"><MDBBtn >Home</MDBBtn></Link>
      <Link to="/Emp_doctor"><MDBBtn >Go Back</MDBBtn></Link>
    <br />
    <br /> 
        <h1  style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>No Records Found.</h1>
  </div>


  
);

  };


    

export default Norecord;