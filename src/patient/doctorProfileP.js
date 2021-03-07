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
import DoctorPageP from "./doctorP"
import DepartPageP from "./finddocP"
import AppointmentDate from "./Appointment"
import { render } from "@testing-library/react";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


function DoctorViewP(props){

    const search = props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id'); 

    const PIdFromURL = params.get('pid'); 

    console.log(IdFromURL);
    console.log(PIdFromURL);

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

   //console.log(props.item.DeptID);
  // console.log('Login function called');

  var day1,day2;
 

    useEffect(() =>{

      Axios.post("https://znts-backend.herokuapp.com/posts/detailOfDoctor", {
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

            console.log(Day(ActiveDay[0]));
          //  console.log(day2);
            
   
          //  console.log(Response.data);
        
       })
 
     },[])
    

  

  return (
    <div style={{backgroundColor:"skyblue" ,height:"100%",width:"100%"}}>  
      <Link to="/"><MDBBtn >Home</MDBBtn></Link>
      <h2 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Doctor Profile:</h2>
      <br />

      {
        <div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <h2>
             ID : {doctorID}
            </h2>
            </div>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <h2>
             Qualification : {doctorQualification}
            </h2>
            </div>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <h2>
             Certificate : {doctorCertificate}
            </h2>
            </div>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <h2>
              Experience : {doctorExperience}
            </h2>
            </div>
             <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <h2>Timing : {doctorTiming}</h2>
           </div>
           <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <h2>Active Days : {Day(ActiveDay[0])} , {Day(ActiveDay[2])}
            </h2>
          </div>
          <br />
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
          <MDBBtn href = {`http://localhost:3000/Appointment?id=${IdFromURL}&pid=${PIdFromURL}`}>Make Appointment</MDBBtn>
          </div>
          <br />
          <br />
          </div>
        
      }
      
  </div>
  
);


}

export default DoctorViewP;