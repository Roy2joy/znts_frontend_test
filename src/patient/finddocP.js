import React, { useState,useEffect }  from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import {Route,Router,Switch} from "react-router-dom";
import { MDBContainer, MDBSelect ,MDBRow, MDBCol, MDBCard,MDBCardBody,MDBCardImage,MDBInput, MDBBtn } from 'mdbreact';
import Select from 'react-select';
import DoctorPageP from "./doctorP"
import {createBrowserHistory} from 'history';
import { render } from "@testing-library/react";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


function DepartPageP (props){


  const search = props.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdFromURL = params.get('id'); 

  console.log(IdFromURL)

  const [deptID, setDeptID] = useState(null);
  const [nameDep, setNameDep] = useState([]);
  useEffect(() => {

    fetch("https://znts-backend.herokuapp.com/get/findDoctor")
    .then(Response => Response.json()) 
    .then(json=> { 
     setNameDep(json);
    })

  },[])


 const Doctor_Info = (Id) => {
  var id;
  window.location.href = `https://znts-frontend.herokuapp.com/doctorP?id=${Id}`;
  }
    

    return (
      <div style={{backgroundColor:"skyblue" ,height:"100%",width:"100%"}}>   
        <Link to="/"><MDBBtn >Home</MDBBtn></Link>
        <h2 style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>DEPARTMENTS:</h2>
        <br />

        {
          nameDep.map((item,index)=>(
            <div key={index}  style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
              <h3>
                {item.DeptID}
              </h3>
              <h3>
                {item.Name}
              </h3>
              
              <Link to={`DoctorPageP?id=${item.DeptID}&pid=${IdFromURL}`}><MDBBtn>View Doctors</MDBBtn></Link>
            </div>
          ))
        }
        
    </div>


    
  );
}




export default DepartPageP;