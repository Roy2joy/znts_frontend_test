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

 

    Axios.post("https://znts-backend.herokuapp.com/posts/detailReport", {
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

  
  

  return (
    <div style={{backgroundColor:"skyblue" ,height:"100%",width:"100%"}}>  
      <Link to="/"><MDBBtn >Home</MDBBtn></Link>
      <h2 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Doctor Profile:</h2>
      <br />
        <h1 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Biodata :</h1>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <h4>
             Name: {nameR}
            </h4>
            <h4>
             Age: {age}
            </h4>
            <h4>
             Gender: {gender}
            </h4>
            <h4>
              Contact Number:{contact}
            </h4>
            <br />
          </div>
          <br />
          <h1 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Records:</h1>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
            <h4>
             PatID: {patid}
            </h4>
            <h4>
             DocID: {docid}
            </h4>
            <h4>
             ExaminedBy: {Examined}
            </h4>
            <h4>
              Date of Report :{dateR}
            </h4>
            <h4>
              Diagnosis :{DiagnosisR}
            </h4>
            <h4>
              Presciption :{Presciption}
            </h4>
            <h4>
              Advice :{Advice}
            </h4>
            <br />
          </div>
      
  </div>
  
);


}

export default FullReport;