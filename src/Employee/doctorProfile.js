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
import DoctorPage from "./doctor"
import DepartPage from "../finddoc"
import { render } from "@testing-library/react";
import getBackendConnection from "../Connection";
import getFrontendConnection from "./Connection";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


function DoctorView(props){

    const search = props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id'); 

   // console.log("12121212")

  //c//onsole.log(IdFromURL);

//    console.log(props)
const [doctorID, setDoctorID] = useState("");
const [doctorQualification, setDoctorQualification] = useState("");
const [doctorCertificate, setDoctorCertificate] = useState("");
const [doctorExperience, setDoctorExperience] = useState("");
const [doctorTiming, setDoctorTiming] = useState("");
const [ActiveDay, setActiveDay] = useState("");


function Day(day) {

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  
  //var n = weekday[d.getDay()];
  
  for(var i=0;i<7;i++) {
    if(i==day){
      return weekday[i];
    }
  }
  
  
  }

  var day1,day2;

   //console.log(props.item.DeptID);
  // console.log('Login function called');
   Axios.post(getBackendConnection()+"posts/detailOfDoctor", {
     ID: IdFromURL,
     //Password: loginPass,
   })
     .then((Response) => {

      setDoctorID(Response.data.DocID);
      setDoctorQualification(Response.data.Qualification);
      setDoctorCertificate(Response.data.Certificate);
      setDoctorExperience(Response.data.Experience);
      setActiveDay(Response.data.ActiveDay);
      setDoctorTiming(Response.data.Timing);

      day1=(Day(ActiveDay[0])); 
      day2=(Day(ActiveDay[2])); 

         console.log(Response.data);
     
    })
  

  return (
    <div style={{backgroundColor:"skyblue" ,height:"778px",width:"100%"}}>  
      <Link to="/"><MDBBtn >Home</MDBBtn></Link>
      <h2 className="deptBanner"> <span className="deptContent2">Doctor Profile: -</span> </h2>
      <br />

      {
        <div className="profileBase">
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">ID</span>
               : {doctorID}
            </div>
            <div className="profileBaseContent">
            <span className="profileBaseContentSpan1">Qualification</span>
             : {doctorQualification}
            </div>
            <div className="profileBaseContent">
            <span className="profileBaseContentSpan1">Certificate</span>
             : {doctorCertificate}
            </div>
            <div className="profileBaseContent">
            <span className="profileBaseContentSpan1">Experience</span>
               : {doctorExperience}
            </div>
            <div className="profileBaseContent">
            <span className="profileBaseContentSpan1">Timing</span>

               : {doctorTiming}
            </div>
            <div className="profileBaseContent">
            <span className="profileBaseContentSpan1">Active Days</span>
               : {Day(ActiveDay[0])} , {Day(ActiveDay[2])}
            </div>
        </div>
        
      }
      
  </div>
  
);


}

export default DoctorView;