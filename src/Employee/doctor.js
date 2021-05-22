import React, { useState,useEffect }  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import {Route,Router,Switch} from "react-router-dom";
import { MDBContainer, MDBSelect ,MDBRow, MDBCol, MDBCard,MDBCardBody,MDBCardImage,MDBInput, MDBBtn } from 'mdbreact';
import Select from 'react-select';
import {createBrowserHistory} from 'history';
import DepartPage from "../finddoc"
import DoctorView from "./doctorProfile"
import { render } from "@testing-library/react";
import getBackendConnection from "../Connection";
import getFrontendConnection from "./Connection";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


function DoctorPage (props){

    const search = props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id'); 

  console.log(IdFromURL);

//    console.log(props)
const [nameDoctor, setNameDoctor] = useState([]);

   //console.log(props.item.DeptID);
   useEffect(() => {

    fetch(getBackendConnection()+`get/doctorOfDept?id=${IdFromURL}`)
    .then(Response => Response.json()) 
    .then(json=> { 
     setNameDoctor(json);
    })

  },[])

  const Doctor_Info = (Id) => {
    var id;
    window.location.href = getFrontendConnection()+`doctorProfile?id=${Id}`;
    }

 


  return (
    <div style={{backgroundColor:"skyblue" ,height:"1000px",width:"100%"}}>    
      <Link to="/"><MDBBtn >Home</MDBBtn></Link>   
      <Link to="/DepartInfo"><MDBBtn >Go Back</MDBBtn></Link>
      <h1 className="deptBanner"> <span className="deptContent">Doctors:</span></h1>
      <br />

      {
        nameDoctor.map((item,index)=>(
          <div key={index}  className="deptListContainer">

            <span className="deptListContainerItems2">
              ID :{item.EmpId}
            </span>

            <span className="deptListContainerItems2">
              Name :{item.Name}
            </span>

            <span className="deptListContainerItems2">
             Specialists: {item.Speciality}
            </span>
            
           <MDBBtn href = {getFrontendConnection()+`doctorProfile?id=${item.EmpId}`}>View Profile</MDBBtn>
          </div>
        ))
      }
      
  </div>
  
);


}




export default DoctorPage;