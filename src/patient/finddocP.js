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
import getBackendConnection from "../Connection";
import getFrontendConnection from "./Connection";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


function DepartPageP (props){


  const search = props.location.search; // returns the URL query String
  const params = new URLSearchParams(search); 
  const IdFromURL = params.get('id'); 

  console.log(IdFromURL)

  const [deptID, setDeptID] = useState(null);
  const [nameDep, setNameDep] = useState([]);
  useEffect(() => {

    fetch(getBackendConnection()+"get/findDoctor")
    .then(Response => Response.json()) 
    .then(json=> { 
     setNameDep(json);
    })

  },[])


 const Doctor_Info = (Id) => {
  var id;
  window.location.href = getFrontendConnection()+`doctorP?id=${Id}`;
  }
    

    return (
      <div style={{backgroundColor:"skyblue" ,height:"100%",width:"100%"}}>   
        <Link to="/"><MDBBtn >Home</MDBBtn></Link>
        <h2 className="deptBanner"> <span className="deptContent"> DEPARTMENTS: </span> </h2>
        <br />

        {
          nameDep.map((item,index)=>(
            <div key={index}  className="deptListContainer">
                <span className="deptListContainerItems"> {item.DeptID}  </span>
                <span className="deptListContainerItems"> {item.Name} </span>
                <Link className="deptListContainerItems" to={`DoctorPageP?id=${item.DeptID}&pid=${IdFromURL}`}><MDBBtn>View Doctors</MDBBtn></Link>
            </div>
          ))
        }
        
    </div>


    
  );
}




export default DepartPageP;