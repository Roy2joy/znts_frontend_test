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
import ReportPage from "./Report"
import DepartPage from "../finddoc"
import { render } from "@testing-library/react";
import getBackendConnection from "../Connection";
import getFrontendConnection from "./Connection";
const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


function FullReport(props){

    const search = props.location.search; // returns the URL query String
    const params = new URLSearchParams(search); 
    const IdFromURL = params.get('id'); 

   // console.log("12121212")

  //console.log(IdFromURL);

//    console.log(props)
const [nameR, setName] = useState("");
const [gender, setGender] = useState("");
const [contact, setContact] = useState("");
const [age, setAge] = useState("");


    const [patid, setPatid] = useState("");
    const [docid, setDocid] = useState("");
    const [Examined, setExamined] = useState("");
    const [dateR, setDate] = useState("");
    const [DiagnosisR, setDiagnosisR] = useState("");
    const [Presciption, setPerscription] = useState("");
    const [Advice, setAdvice] = useState("");


   //console.log(props.item.DeptID);
  // console.log('Login function called');

 

    Axios.post(getBackendConnection()+"posts/detailReport", {
        RepID: IdFromURL,
        //Password: loginPass,
      })
        .then((Response) => {
   
            setName(Response.data.BioData.Name);
            setGender(Response.data.BioData.Gender);
            setAge(Response.data.BioData.Age);
            setContact(Response.data.BioData.ContactNumber);
            setPatid(Response.data.Records.PatID);
            setDocid(Response.data.Records.DocID);
            setExamined(Response.data.Records.ExaminedBy);
            setDate(Response.data.Records.Date);
            setDiagnosisR(Response.data.Records.Diagnosis);
            setPerscription(Response.data.Records.Prescription);
            setAdvice(Response.data.Records.Advice);
           // console.log(Response);
          
        
       })

       if(Presciption===""){
        setPerscription("-")
       }
       if(Advice===""){
        setAdvice("-")
       }

  
  

  return (
    <div style={{backgroundColor:"skyblue" ,height:"1300px",width:"100%"}}>  
      <Link to="/"><MDBBtn >Home</MDBBtn></Link>
      <h2 className="deptBanner"> <span className="deptContent2">Medical Report: -</span> </h2>
          
          
          <div className="profileBase">
            <h1 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Biodata :</h1>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">Name</span>
                : {nameR}
            </div>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">Age</span>
                : {age}
            </div>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">Gender</span>
              : {gender}
            </div>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">Contact</span>
              : {contact}
            </div>      


            <h1 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Records:</h1>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">PatID</span>
                : {patid}
            </div>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">DocID</span>
                : {docid}
            </div>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">ExaminedBy</span>
              : {Examined}
            </div>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">Date of Report</span>
              : {dateR}
            </div>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">Diagnosis</span>
              : {DiagnosisR}
            </div>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">Presciption</span>
              : {Presciption}
            </div>
            <div className="profileBaseContent">
              <span className="profileBaseContentSpan1">Advice</span>
              :    {Advice}
            </div>
          </div>
      
  </div>
  
);


}

export default FullReport;