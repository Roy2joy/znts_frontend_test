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
import DepartPageP from "./finddocP"
import DoctorViewP from "./doctorProfileP"
import { render } from "@testing-library/react";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


function DoctorPageP (props){

    const search = props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id'); 
    const PIdFromURL = params.get('pid'); 

  console.log(IdFromURL);
  console.log(PIdFromURL);

//    console.log(props)
const [nameDoctor, setNameDoctor] = useState([]);

   //console.log(props.item.DeptID);
   useEffect(() => {

    fetch(`https://znts-backend.herokuapp.com/get/doctorOfDept?id=${IdFromURL}`)
    .then(Response => Response.json()) 
    .then(json=> { 
     setNameDoctor(json);
    })

  },[])

  const Doctor_Info = (Id) => {
    var id;
    window.location.href = `https://znts-frontend.herokuapp.com/doctorProfileP?id=${Id}`;
    }

 


  return (
    <div style={{backgroundColor:"skyblue" ,height:"100%",width:"100%"}}>    
      <Link to="/"><MDBBtn >Home</MDBBtn></Link>   
      <Link to="/DepartInfo"><MDBBtn >Go Back</MDBBtn></Link>
      <h1 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Doctors:</h1>
      <br />

      {
        nameDoctor.map((item,index)=>(
          <div key={index}  style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            
            <h3>
              ID :{item.EmpId}
            </h3>
            <h3>
              Name :{item.Name}
            </h3>
            <h3>
             Specialists: {item.Speciality}
            </h3>
           <MDBBtn href = {`https://znts-frontend.herokuapp.com/doctorProfileP?id=${item.EmpId}&pid=${PIdFromURL}`}>View Profile</MDBBtn>
          </div>
        ))
      }
      
  </div>
  
);


}




export default DoctorPageP;